
import "./CustomInputContainer.scss";

// eslint-disable-next-line react/prop-types
const CustomInputContainer = ({ children, label, type, func }) => {
  return (
    <div className="input-group">
      <input required type={type} name="text" autoComplete="off" className="input w-full" {...func} />
      <label className="user-label font-bold rounded">{label}</label>
      {children}
    </div>
  );
};

export default CustomInputContainer;
