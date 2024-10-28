import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllFriends } from 'redux/friends/selectors';
import { getAllFriends } from 'redux/friends/operations';
import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';
import { List } from './FriendsList.styled';

export const FriendsList = () => {
  const dispatch = useDispatch();
  const friends = useSelector(selectAllFriends);

  useEffect(() => {
    dispatch(getAllFriends());
  }, [dispatch]);

  return (
    <List>
      {friends.map(friend => (
        <FriendsListItem key={friend._id} friendInfo={friend} />
      ))}
    </List>
  );
};
