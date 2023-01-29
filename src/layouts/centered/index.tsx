export type CenteredProps = {
  children: React.ReactNode;
};

const Centered: React.FC<CenteredProps> = ({ children }) => (
  <div className="flex items-center justify-center h-full w-full text-gray-900">
    <div className="px-4 py-[20%]">{children}</div>
  </div>
);

export default Centered;
