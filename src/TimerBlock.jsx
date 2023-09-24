import { useState } from "react";

const TimerBlock = ({ type, value }) => {
  const [test, setTest] = useState(0);
  setTimeout(() => {
    document.querySelectorAll("#number-block").forEach((item) => {
      item.setAttribute("upper-value", value);
    });
  }, 500);
  setTimeout(() => {
    document.querySelectorAll("#number-block").forEach((item) => {
      item.setAttribute("lower-value", value - 1);
    });
    setTimeout(() => {
      setTest(value - 1);
    }, 750);
  }, 1000);

  return (
    <div>
      <div
        id="number-block"
        className="relative w-[4.5rem] h-16 drop-shadow-lg grid place-content-center"
      >
        <div
          id="upper-half"
          className="absolute  brightness-90 w-full h-16 rounded-md overflow-hidden"
        >
          <div className="bg-Dark-desaturated-blue w-full h-8 overflow-hidden absolute">
            <div className="absolute w-full top-3">{value}</div>
          </div>
        </div>
        <div
          id="lower-half"
          className="absolute bottom-0  brightness-110 w-full h-16 rounded-md overflow-hidden"
        >
          <div className="bg-Dark-desaturated-blue w-full h-8 overflow-hidden absolute bottom-0">
            <div className="absolute w-full bottom-3">{test}</div>
          </div>
        </div>
        <div
          id="left-dot"
          className="h-[6px] w-[6px] bg-Dark-blue absolute rounded-full top-[calc(50%-3px)] -left-[3px] z-10"
        ></div>
        <div
          id="right-dot"
          className="h-[6px] w-[6px] bg-Dark-blue absolute rounded-full top-[calc(50%-3px)] -right-[3px] z-10"
        ></div>
      </div>
      <div
        id="block-type"
        className="text-[0.45rem] text-Grayish-blue tracking-[3px] -mt-1 uppercase "
      >
        {type}
      </div>
    </div>
  );
};

export default TimerBlock;
