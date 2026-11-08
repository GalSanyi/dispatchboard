import './InputField.css';
export default function InputField() {
  return (
    <div className="input-field">
      <h3 className="input-field__text">Trip inputs</h3>
      <label className="input-field__label">
        <span className="input-field__label-text">Departure</span>
        <input type="datetime-local" className="input-field__input" />
      </label>
      <label className="input-field__label">
        <span className="input-field__label-text">Distance</span>
        <span className="input-field__control">
          <input type="number" className="input-field__input" />
          <span className="input-field__unit" aria-hidden="true">
            km
          </span>
        </span>
      </label>
      <label className="input-field__label">
        <span className="input-field__label-text">Average speed</span>
        <span className="input-field__control">
          <input type="number" className="input-field__input" />
          <span className="input-field__unit" aria-hidden="true">
            km/h
          </span>
        </span>
      </label>
      <label className="input-field__label">
        <span className="input-field__label-text">Already driven today</span>
        <input
          type="text"
          defaultValue="0 h 00 min"
          className="input-field__input"
        />
      </label>
      <button className="input-field__button" type="submit">
        Calculate ETA
      </button>
    </div>
  );
}
