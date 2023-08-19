type Props = {
  size?: keyof typeof mapSize;
  variant?: keyof typeof mapClassname;
} & Omit<React.HTMLProps<HTMLSpanElement>, 'size'>;

const mapClassname = {
  primary: 'text-blue-4',
  secondary: 'text-gray-6',
  success: 'text-green-0-7',
  error: 'text-red-15',
  info: 'text-blue-1',
  indigo: 'text-purple-10-7',
  warning: 'text-orange-15',
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
      className={`alert${className ? ` ${className}` : ''} ${
        mapClassname[variant]
      } ${mapSize[size]}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Alert;
