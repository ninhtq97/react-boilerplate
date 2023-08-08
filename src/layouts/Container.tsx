type Props = {
  title: React.ReactNode;
  renderAction?: React.FC;
  renderFilter?: React.FC;
} & Omit<React.HTMLProps<HTMLElement>, 'title'>;

const Container: React.FC<Props> = ({
  className,
  title,
  renderAction,
  renderFilter,
  children,
}) => {
  return (
    <div className={`flex flex-col flex-1 ${className || ''}`}>
      <div className="flex items-center justify-between flex-wrap gap-3 py-4 px-4 xs:px-5 border-b">
        <h4 className="flex gap-2.5 font-medium text-2xl leading-9">{title}</h4>
        {renderAction && (
          <div className="flex justify-end">{renderAction({})}</div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-4 xs:p-5">
        {renderFilter ? (
          <div className="flex flex-col flex-1 gap-5">
            <div className="flex flex-col gap-5">{renderFilter({})}</div>

            <div className="relative flex flex-col flex-1 gap-5">
              {children}
            </div>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default Container;
