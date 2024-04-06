import { cn } from 'utils';

type Props = {} & Omit<React.HTMLProps<HTMLSpanElement>, 'size'>;

const Alert: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <span className={cn('alert px-3 py-1', className)} {...props}>
      {children}
    </span>
  );
};

export default Alert;
