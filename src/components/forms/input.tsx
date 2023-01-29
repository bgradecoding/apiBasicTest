interface InputProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        className=" w-56 border h-8 border-gray-300 placeholder:text-xs placeholder-gray-300 rounded-md"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
