import { useState } from 'react';
import { UserBlock } from 'components/UserBlock/UserBlock';
import { PetsBlock } from 'components/PetsBlock/PetsBlock';
import { EditUserModal } from 'components/EditUserModal/EditUserModal';
import { ApproveActionModal } from 'components/ApproveActionModal/ApproveActionModal';
import {
  UserCardSection,
  Wrapp,
  UserSignWrapp,
  Icon,
  EditProfileButton,
  EditIcon,
  LogoutButton,
} from './UserCard.styled';

export const UserCard = () => {
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleToggleEditUserModal = () => {
    setIsEditUserModalOpen(!isEditUserModalOpen);
  };

  const handleToggleLogoutModal = () => {
    setIsLogoutModalOpen(!isLogoutModalOpen);
  };
  return (
    <UserCardSection>
      <Wrapp>
        <UserSignWrapp>
          User
          <Icon width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.00038 11.25C6.62282 11.25 4.50847 12.398 3.16237 14.1795C2.87265 14.5629 2.7278 14.7546 2.73253 15.0137C2.7362 15.2139 2.8619 15.4664 3.0194 15.59C3.22327 15.75 3.50578 15.75 4.0708 15.75H13.93C14.495 15.75 14.7775 15.75 14.9814 15.59C15.1389 15.4664 15.2646 15.2139 15.2682 15.0137C15.273 14.7546 15.1281 14.5629 14.8384 14.1795C13.4923 12.398 11.3779 11.25 9.00038 11.25Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 9C10.864 9 12.375 7.48896 12.375 5.625C12.375 3.76104 10.864 2.25 9 2.25C7.13604 2.25 5.625 3.76104 5.625 5.625C5.625 7.48896 7.13604 9 9 9Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Icon>
        </UserSignWrapp>
        <EditProfileButton type="button" onClick={handleToggleEditUserModal}>
          <EditIcon width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_55822_7958)">
              <path
                d="M12.75 2.25C12.947 2.05301 13.1808 1.89676 13.4382 1.79015C13.6956 1.68355 13.9714 1.62868 14.25 1.62868C14.5286 1.62868 14.8044 1.68355 15.0618 1.79015C15.3192 1.89676 15.553 2.05301 15.75 2.25C15.947 2.44698 16.1032 2.68083 16.2098 2.9382C16.3164 3.19557 16.3713 3.47142 16.3713 3.75C16.3713 4.02857 16.3164 4.30442 16.2098 4.56179C16.1032 4.81916 15.947 5.05301 15.75 5.25L5.625 15.375L1.5 16.5L2.625 12.375L12.75 2.25Z"
                stroke="#F6B83D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_55822_7958">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </EditIcon>
        </EditProfileButton>
      </Wrapp>

      <UserBlock />

      <PetsBlock />

      <LogoutButton type="button" onClick={handleToggleLogoutModal}>
        Log out
      </LogoutButton>
      {isEditUserModalOpen && <EditUserModal onClose={handleToggleEditUserModal} />}
      {isLogoutModalOpen && <ApproveActionModal onClose={handleToggleLogoutModal} />}
    </UserCardSection>
  );
};
