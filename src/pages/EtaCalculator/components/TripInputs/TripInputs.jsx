import { useState } from 'react';
import InputField from '../../../../components/InputField/InputField';
import './TripInputs.css';

function formatDeparture(value) {
  if (!value) return '';
  const parts = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date(value));
  const get = (type) => parts.find((part) => part.type === type)?.value || '';
  return `${get('weekday')},  ${get('month')} · ${get('day')} ${get('hour')}:${get('minute')}`;
}
export default function TripInputs() {
  const [departure, setDeparture] = useState('2026-10-19T06:00');
  return (
    <div className="trip-inputs">
      <label className="input-field__label">
        <span className="input-field__label-text">Departure</span>
        <span className="input-field__control">
          <input
            type="text"
            readOnly
            value={formatDeparture(departure)}
            className="input-field__input"
          />
          <input
            type="datetime-local"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            onClick={(e) => e.target.showPicker()}
            className="trip-inputs__picker"
          />
        </span>
      </label>

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
