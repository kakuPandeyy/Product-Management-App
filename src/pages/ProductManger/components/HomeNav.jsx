import { Home } from 'lucide-react';
import './HomeNav.css';
import { useNavigate } from 'react-router-dom';

export default function HomeNav() {
  const navigate = useNavigate();

  return (
    <>
      <button className="home-nav-btn" onClick={() => navigate('/')}>
        <Home size={20} />
        <span>Home</span>
      </button>
    </>
  );
}
