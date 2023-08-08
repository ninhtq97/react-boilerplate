import FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import Button from '.';

type Props = {
  heading: Record<string, any>;
  data: any[];
  fileName: string;
  wsCols: { wch: number }[];
};

const ExportExcel: React.FC<Props> = ({ heading, data, fileName, wsCols }) => {
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToCSV = (
    data: Props['data'],
    fileName: Props['fileName'],
    wsCols: Props['wsCols'],
  ) => {
    const ws = XLSX.utils.json_to_sheet([heading], {
      header: Object.keys(heading),
      skipHeader: true,
    });
    ws['!cols'] = wsCols;
    XLSX.utils.sheet_add_json(ws, data, {
      header: Object.keys(heading),
      skipHeader: true,
      origin: -1,
    });
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blobData = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(blobData, fileName + fileExtension);
  };

  return (
    <Button type="button" onClick={(e) => exportToCSV(data, fileName, wsCols)}>
      Xuất file excel
    </Button>
  );
};

export default ExportExcel;
