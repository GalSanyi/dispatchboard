import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { label: 'ETA calculator', path: '/eta-calculator' },
  { label: 'Trips', path: '/trips' },
  { label: 'Drivers', path: '/drivers' },
  { label: 'Vehicles', path: '/vehicles' },
  { label: 'Documents (CMR)', path: '/documents' },
  { label: 'Reports', path: '/reports' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__header-main">
        <NavLink to="/" className="sidebar__logo">
          <span className="sidebar__logo-icon" aria-hidden="true" />
          DispatchBoard
        </NavLink>
      </div>
      <nav className="sidebar__nav" aria-label="Main navigation">
        {menuItems.map(item => (
          <NavLink
            key={item.path}
            className={({ isActive }) =>
              `sidebar__link${isActive ? ' sidebar__link--active' : ''}`
            }
            to={item.path}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
