import './InputField.css';

export default function InputField({ label, type, suffix, defaultValue }) {
  return (
    <label className="input-field__label">
      <span className="input-field__label-text">{label}</span>

      <span className="input-field__control">
        <input
          type={type}
          className="input-field__input"
          defaultValue={defaultValue}
        />

        {suffix && <span className="input-field__unit">{suffix}</span>}
      </span>
    </label>
  );
}
