type Props = {
  tag?: React.ElementType;
  clickable?: boolean;
} & React.HTMLProps<HTMLElement>;

const Typography: React.FC<Props> = ({
  className,
  tag: Wrapper = 'p',
  clickable,
  children,
  ...props
}) => {
  return (
    <Wrapper
      className={`typography${className ? ` ${className}` : ''}${
        clickable ? ' cursor-pointer select-none' : ''
      }`}
      {...props}
    >
      <span className="typography__text">{children}</span>
    </Wrapper>
  );
};

export default Typography;
