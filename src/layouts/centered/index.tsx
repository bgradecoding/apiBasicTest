export type CenteredProps = {
  children: React.ReactNode;
};

const Centered: React.FC<CenteredProps> = ({ children }) => (
  <div className="flex items-center justify-center w-full h-full text-gray-900">
    <div className="px-4 py-[15%]">{children}</div>
  </div>
);

export default Centered;
