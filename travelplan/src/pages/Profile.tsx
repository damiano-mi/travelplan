import { useContext } from 'react';
import UserContext from "../context/userContext";
import { Link } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useContext(UserContext);

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      <h1>{user.name}'s profile</h1>
      <Link to="/login">
        <button onClick={logout}>Logout</button>
      </Link>
    </div>
  );
};

export default Profile;
