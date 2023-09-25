const TimerBlock = ({ type, value }) => {
  return (
    <div>
      <div className="relative max-md:w-[4.5rem] w-[9.375rem] max-md:h-16 h-[140px]  max-md:drop-shadow-[0_4px_0_rgba(0,0,0,0.2)] drop-shadow-[0_10px_0_rgba(0,0,0,0.2)] grid place-content-center overflow-hidden bg-Dark-desaturated-blue max-md:rounded-md rounded-lg brightness-110 z-20">
        <div className="max-md:text-4xl text-[5rem]">{value}</div>
        <div
          id="upper-half"
          className="absolute bg-[#100d1f] w-full max-md:h-8 h-[70px] rounded-t-md opacity-[30%] border-b border-black"
        ></div>
        <div
          id="left-dot"
          className="max-md:h-[6px] max-md:w-[6px] w-3 h-3 bg-Dark-blue absolute rounded-full max-md:top-[calc(50%-3px)]  top-[calc(50%-6px)] -left-[6px] max-md:-left-[3px]  z-10"
        ></div>
        <div
          id="right-dot"
          className="max-md:h-[6px] max-md:w-[6px] w-3 h-3 bg-Dark-blue absolute rounded-full max-md:top-[calc(50%-3px)] max-md:-right-[3px] top-[calc(50%-6px)] -right-[6px] z-10"
        ></div>
      </div>
      <div className="max-md:scale-[60%] text-Grayish-blue max-md:text-[3px] text-sm tracking-[5px]  uppercase max-md:w-[4.5rem] max-md:mt-2 mt-6">
        {type}
      </div>
    </div>
  );
};

export default TimerBlock;
