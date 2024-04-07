import { HeadCell } from 'types';
import * as XLSX from 'xlsx';

const useExport = (COLUMNS: HeadCell[]) => {
  const ext = '.xlsx';
  const HEADING = COLUMNS.filter((x) => x.label).reduce(
    (prev, curr) => ({ ...prev, [curr.id]: curr.label }),
    {},
  );

  const onExport = <T>(data: T[], fileName: string) => {
    const ws = XLSX.utils.json_to_sheet([HEADING], {
      header: Object.keys(HEADING),
      skipHeader: true,
    });
    ws['!cols'] = Object.keys(HEADING).map((key) => {
      const maxLength = Math.max(...data.map((e) => (e[key] || []).length));
      return {
        wch:
          maxLength > HEADING[key].length ? maxLength + 3 : HEADING[key].length,
      };
    });
    XLSX.utils.sheet_add_json(ws, data, {
      header: Object.keys(HEADING),
      skipHeader: true,
      origin: -1,
    });
    const wb = { Sheets: { Data: ws }, SheetNames: ['Data'] };
    XLSX.writeFile(wb, fileName + ext);
  };

  return { onExport };
};

export default useExport;
