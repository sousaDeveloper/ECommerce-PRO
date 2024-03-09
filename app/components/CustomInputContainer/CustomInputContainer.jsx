import "./CustomInputContainer.scss";

const CustomInputContainer = ({ children, label, type, func }) => {
  return (
    <div className="input-group">
      <input required="true" type={type} name="text" autocomplete="off" className="input w-full" {...func} />
      <label className="user-label font-bold rounded">{label}</label>
      {children}
    </div>
  );
};

export default CustomInputContainer;
