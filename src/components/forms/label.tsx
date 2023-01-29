interface LabelProps {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {
  return <label className=" text-gray-400">{text}</label>;
};

export default Label;
