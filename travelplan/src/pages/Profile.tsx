import { useContext } from 'react';
import UserContext from "../context/userContext";
import { Link } from 'react-router-dom';
import { useUserContext } from '../hooks/useUserContext';

const Profile = () => {
  const {user, logout} = useUserContext();

  return (
    <div>
      <h1>{user?.name}'s profile</h1>
      <Link to="/login">
        <button onClick={logout}>Logout</button>
      </Link>
    </div>
  );
};

export default Profile;
