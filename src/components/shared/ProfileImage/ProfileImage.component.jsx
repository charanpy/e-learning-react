import { useUser } from '../../../context/UserProvider';
import './profile-image.css';

const ProfileImageComponent = () => {
  const { user } = useUser();
  return (
    <>
      {!user?.image?.url ? (
        <div className='profileImage flex-row centerAll'>
          <p>{user?.name?.[0]?.toUpperCase() || 'A'}</p>
        </div>
      ) : (
        <img alt='profile' src={user?.image?.url} className='profileImg' />
      )}
    </>
  );
};

export default ProfileImageComponent;
