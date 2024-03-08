const CustomInputContainer = ({ children, label, htmlFor }) => {
  return (
    <div className="relative">
      {children}
      <label
        className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#F2B6C1] peer-focus:text-sm"
        htmlFor="email"
      >
        {label}
      </label>
    </div>
  );
};

export default CustomInputContainer;
