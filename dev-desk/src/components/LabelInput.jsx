import "./styles/LabelInput.css";
export default function LableInput({
  name,
  type,
  id,
  placeholder,
  onChange,
  value,
}) {
  return (
    <div className="input-container">
      <label>{name}</label>
      <input
        className="label-input"
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      ></input>
    </div>
  );
}
