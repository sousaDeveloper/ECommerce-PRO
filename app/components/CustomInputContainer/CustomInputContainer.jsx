import "./CustomInputContainer.scss";

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
