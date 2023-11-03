import { useMemo } from 'react';
import { HeadCell } from '../components/Table';

const useExport = <T>(COLUMNS: HeadCell[], excelData: T[]) => {
  const HEADING = COLUMNS.filter((x) => x.label).reduce(
    (prev, curr) => ({ ...prev, [curr.id]: curr.label }),
    {},
  );

  const wsCols = useMemo(
    (): { wch: number }[] =>
      Object.keys(HEADING).map((key) => {
        const maxLength = Math.max(
          ...excelData.map((e) => (e[key] || []).length),
        );
        return {
          wch:
            maxLength > HEADING[key].length
              ? maxLength + 3
              : HEADING[key].length,
        };
      }),
    [HEADING, excelData],
  );

  return { HEADING, excelData, wsCols };
};

export default useExport;
