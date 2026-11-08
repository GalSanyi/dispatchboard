import './TopBar.css';
import { UserPlus, User } from 'lucide-react';
export default function TopBar() {
  return (
    <div className="top-bar">
      <button type="button" className="login-user">
        <User size={20} className="icon" />
        Log in
      </button>

      <button type="button" className="signup-user">
        <UserPlus size={20} color="#fff" className="icon-plus" />
        Sign up
      </button>
    </div>
  );
}
