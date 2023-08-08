type Props = {} & React.HTMLProps<HTMLDivElement>;

const Bubble: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div
      className={`bubble${className ? ` ${className}` : ''}`}
      {...props}
    ></div>
  );
};

export default Bubble;
