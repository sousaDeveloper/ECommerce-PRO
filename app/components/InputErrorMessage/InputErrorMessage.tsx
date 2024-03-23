interface InputErrorMessageProps {
  children: string;
}

export default function InputErrorMessage({ children }: InputErrorMessageProps) {
  return <div className="text-[#ff4545] font-bold">{children}</div>;
}
