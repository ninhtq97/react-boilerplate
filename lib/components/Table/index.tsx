export type HeadCell = {
  id: string;
  label: string | React.ReactNode;
} & React.ThHTMLAttributes<HTMLTableCellElement>;

type Props = {
  columns?: HeadCell[];
} & React.HTMLAttributes<HTMLElement>;

const Table: React.FC<Props> = ({ className, columns, children }) => {
  return (
    <div className="tbl-wrapper">
      <table className={`tbl${className ? ` ${className}` : ''}`}>
        {columns && (
          <thead>
            <tr>
              {columns.map(({ id, label, ...props }, i) => (
                <th key={id || i} {...props}>
                  {label}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
