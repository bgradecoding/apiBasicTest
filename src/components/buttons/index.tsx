interface ButtonProps {
  onClick: () => void;
  text: string;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, width }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`bg-blue-500 text-white h-8 ${width} rounded-lg`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
