const TimerBlock = ({ type, value }) => {
  return (
    <div>
      <div
        id="block"
        className="relative w-[4.5rem] h-16 drop-shadow-lg grid place-content-center overflow-hidden bg-Dark-desaturated-blue rounded-md"
      >
        <div className="">{value}</div>
        <div
          id="upper-half"
          className="absolute bg-Dark-blue w-full h-8 rounded-t-md opacity-[30%]"
        ></div>
        {/* <div
                  id="lower-half"
                  className="absolute bottom-0 bg-Dark-desaturated-blue w-full h-8 rounded-b-md"
                ></div> */}
        <div
          id="left-dot"
          className="h-[6px] w-[6px] bg-Dark-blue absolute rounded-full top-[calc(50%-3px)] -left-[3px]"
        ></div>
        <div
          id="right-dot"
          className="h-[6px] w-[6px] bg-Dark-blue absolute rounded-full top-[calc(50%-3px)] -right-[3px]"
        ></div>
      </div>
      <div className="text-[0.45rem] text-Grayish-blue tracking-[3px] -mt-1 uppercase">
        {type}
      </div>
    </div>
  );
};

export default TimerBlock;
