import InputField from '../../../../components/InputField/InputField';
import './TripInputs.css';

export default function TripInputs() {
  return (
    <div className="trip-inputs">
      <InputField label="Departure" type="datetime-local" />
      <InputField
        label="Distance"
        type="number"
        suffix="km"
        defaultValue={700}
      />
      <InputField
        label="Average speed"
        type="number"
        suffix="km/h"
        defaultValue={80}
      />
      <InputField
        label="Already driven today"
        type="text"
        defaultValue="0 h 00 min"
      />
      <button className="input-field__button" type="button">
        Calculate ETA
      </button>
    </div>
  );
}
