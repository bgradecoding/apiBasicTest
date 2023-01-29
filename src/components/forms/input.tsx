interface InputProps {
  placeholder: string;
  type: string;
  value: string;
  width?: string;
  onChange: (v: string) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  value,
  width = "w-56",
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
        className={`${width} h-8 placeholder-gray-300 border border-gray-300 rounded-md placeholder:text-xs`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
