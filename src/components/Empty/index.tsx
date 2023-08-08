import IllustrationEmpty from 'assets/images/empty.png';

const Empty = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-7">
      <img src={IllustrationEmpty} alt="" />
      <p className="text-gray-7">Không có dữ liệu</p>
    </div>
  );
};

export default Empty;
