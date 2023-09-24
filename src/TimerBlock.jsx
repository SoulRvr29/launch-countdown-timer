const TimerBlock = ({ type, value }) => {
  return (
    <div>
      <div
        id="block"
        className="relative w-[4.5rem] h-16 drop-shadow-lg grid place-content-center overflow-hidden bg-Dark-desaturated-blue rounded-md brightness-110"
      >
        <div className="">{value}</div>
        <div
          id="upper-half"
          className="absolute bg-Dark-blue w-full h-8 rounded-t-md opacity-[30%]"
        ></div>
        <div
          id="left-dot"
          className="h-[6px] w-[6px] bg-Dark-blue absolute rounded-full top-[calc(50%-3px)] -left-[3px] z-10"
        ></div>
        <div
          id="right-dot"
          className="h-[6px] w-[6px] bg-Dark-blue absolute rounded-full top-[calc(50%-3px)] -right-[3px] z-10"
        ></div>
      </div>
      <div className="scale-[60%] text-Grayish-blue text-[3px] tracking-[5px]  uppercase w-[4.5rem] text">
        {type}
      </div>
    </div>
  );
};

export default TimerBlock;
