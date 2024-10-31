import { useState } from 'react';
import { UserBlock } from 'components/ProfilePageComponents/UserBlock/UserBlock';
import { PetsBlock } from 'components/ProfilePageComponents/PetsBlock/PetsBlock';
import { EditUserModal } from 'components/ProfilePageComponents/EditUserModal/EditUserModal';
import { ApproveActionModal } from 'components/ProfilePageComponents/ApproveActionModal/ApproveActionModal';
import {
  UserCardSection,
  Wrapp,
  UserSignWrapp,
  UserIcon,
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
          <UserIcon />
        </UserSignWrapp>
        <EditProfileButton type="button" onClick={handleToggleEditUserModal}>
          <EditIcon />
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
