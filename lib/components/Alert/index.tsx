import { twMerge } from 'tailwind-merge';

type Props = {
  size?: keyof typeof mapSize;
  variant?: keyof typeof mapClassname;
} & Omit<React.HTMLProps<HTMLSpanElement>, 'size'>;

const mapClassname = {
  primary: 'text-blue-500',
  secondary: 'text-gray-500',
  success: 'text-green-500',
  error: 'text-rose-600',
  info: 'text-blue-600',
  indigo: 'text-purple-500',
  warning: 'text-orange-400',
};

const mapSize = {
  sm: 'py-[3px] px-[8.5px] text-[12px] leading-[18px]',
  base: 'py-[4.5px] px-3',
};

const Alert: React.FC<Props> = ({
  className,
  size = 'base',
  variant = 'primary',
  children,
  ...props
}) => {
  return (
    <span
      className={twMerge(
        'alert',
        className,
        mapClassname[variant],
        mapSize[size],
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Alert;
