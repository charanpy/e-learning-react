
import { useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {
  const location = useLocation();
  return (
    <header className='flex-row align appHeader'>
      <div>
        <h1 className='appHeaderText'>E-Learning</h1>
      </div>
      <ul className='appNav flex-row'>
        <li>Home</li>
        <li>My Courses</li>
        <li>Profile</li>
      </ul>
    </header>
  );
};

export default Header;
