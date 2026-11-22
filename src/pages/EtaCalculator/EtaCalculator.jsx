import TripInputs from './components/TripInputs/TripInputs';
import './EtaCalculator.css';
export default function EtaCalculator() {
  return (
    <section className="eta-calculator">
      <div className="title">
        <h2 className="eta-title">ETA calculator</h2>
        <p className="eta-subtitle">
          Estimate arrival time with EU driving-time rules (Reg. 561/2006) ·
          Sample data
        </p>
      </div>
      <TripInputs />
    </section>
  );
}
