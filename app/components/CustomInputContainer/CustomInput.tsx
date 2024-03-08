interface CustomInputProps {
  func: any;
  id: string;
  type: string;
  placeholder: string;
}

export default function CustomInput({ id, type, func, placeholder }: CustomInputProps) {
  return (
    <input
      className="peer z-10 h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-[#F2B6C1]"
      id={id}
      type={type}
      {...func}
      placeholder={placeholder}
    />
  );
}
