const Loading = () => {
  return (
    <div className="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-[1000] bg-black-2 bg-opacity-10">
      <span className="relative w-[50px] h-[50px] rotate-[165deg]">
        <span className="absolute top-1/2 left-1/2 block w-[10px] h-[10px] rounded-[5px] -translate-x-1/2 -translate-y-1/2 animate-spinners-before"></span>
        <span className="absolute top-1/2 left-1/2 block w-[10px] h-[10px] rounded-[5px] -translate-x-1/2 -translate-y-1/2 animate-spinners-after"></span>
      </span>
    </div>
  );
};

export default Loading;
