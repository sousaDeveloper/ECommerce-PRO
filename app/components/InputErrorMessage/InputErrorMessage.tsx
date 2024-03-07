import React from "react";

interface InputErrorMessageProps {
  children: string;
}

const InputErrorMessage: React.FC<InputErrorMessageProps> = ({ children }) => {
  return <div className="text-[#ff4545] font-bold">{children}</div>;
};

export default InputErrorMessage;
