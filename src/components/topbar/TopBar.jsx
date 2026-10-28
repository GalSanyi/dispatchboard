import './TopBar.css';
import { UserPlus, User } from 'lucide-react';
export default function TopBar() {
  return (
    <div className="top-bar">
      <button className='login-user'>
        <User size={20} width={20} className="icon" />
        Log in
      </button>

      <button className='signup-user'>
        <UserPlus size={20} width={20} color="#fff" className="icon-plus" />
        Sign up
      </button>
    </div>
  );
}
