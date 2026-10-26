
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar.jsx';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/eta-calculator" replace />} />
          <Route path="/eta-calculator" element={<h1>ETA calculator</h1>} />
          <Route path="/trips" element={<h1>Trips</h1>} />
          <Route path="/drivers" element={<h1>Drivers</h1>} />
          <Route path="/vehicles" element={<h1>Vehicles</h1>} />
          <Route path="/documents" element={<h1>Documents (CMR)</h1>} />
          <Route path="/reports" element={<h1>Reports</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
