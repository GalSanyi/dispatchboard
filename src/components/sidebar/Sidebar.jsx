import './Sidebar.css';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="sidebar__header-mai">
        <NavLink to="/" className="sidebar__logo">
         <div className="sidebar__logo-icon"></div>
          DispatchBoard
        </NavLink>
      </div>
      <nav className="sidebar__nav">
        <div className="sidebar__header">
          <NavLink className="sidebar__link" to="/eta-calculator">
            ETA calculator
          </NavLink>
        </div>
        <div className="sidebar__header">
          <NavLink className="sidebar__link" to="/trips">
            Trips
          </NavLink>
        </div>
        <div className="sidebar__header">
          <NavLink className="sidebar__link" to="/drivers">
            Drivers
          </NavLink>
        </div>
        <div className="sidebar__header">
          <NavLink className="sidebar__link" to="/vehicles">
            Vehicles
          </NavLink>
        </div>
        <div className="sidebar__header">
          <NavLink className="sidebar__link" to="/documents">
            Documents (CMR)
          </NavLink>
        </div>
        <div className="sidebar__header"  >
          <NavLink className="sidebar__link" to="/reports">
            Reports
          </NavLink>
        </div>
      </nav>
    </section>
  );
}
