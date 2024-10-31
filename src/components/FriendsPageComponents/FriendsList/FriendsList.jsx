import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFriends } from 'redux/friends/operations';
import { selectAllFriends, selectIsLoading } from 'redux/friends/selectors';
import { FriendsListItem } from 'components/FriendsPageComponents/FriendsListItem/FriendsListItem';
import { SkeletonOurFriendsCard } from 'components/Loaders/Skeletons/SkeletonOurFriendsCard';
import { FriendsListContainer, List } from './FriendsList.styled';

export const FriendsList = () => {
  const dispatch = useDispatch();
  const friends = useSelector(selectAllFriends);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllFriends());
  }, [dispatch]);

  return (
    <FriendsListContainer>
      {isLoading ? (
        <List>
          {Array.from(new Array(9)).map((_, index) => (
            <SkeletonOurFriendsCard key={index} />
          ))}
        </List>
      ) : (
        <List>
          {friends.map(friend => (
            <FriendsListItem key={friend._id} friendInfo={friend} />
          ))}
        </List>
      )}
    </FriendsListContainer>
  );
};
