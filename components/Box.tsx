import { twMerge } from 'tailwind-merge';

interface BoxProps {
  children: React.ReactNode;
  classname?: string;
}

const Box: React.FC<BoxProps> = ({ classname, children }) => {
  return (
    <div
      className={twMerge(` bg-neutral-900 rounded-lg h-fit w-full`, classname)}
    >
      {children}
    </div>
  );
};

export default Box;
