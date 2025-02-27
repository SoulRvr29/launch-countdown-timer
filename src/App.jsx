import TimerBlock from "./TimerBlock";
import { useReducer, useEffect } from "react";
import Footer from "./Footer";

function reducer(state, action) {
  switch (action.type) {
    case "countDownSeconds":
      return { ...state, seconds: state.seconds - 1 };
    case "countDownMinutes":
      return { ...state, minutes: state.minutes - 1, seconds: 59 };
    case "countDownHours":
      return { ...state, hours: state.hours - 1, minutes: 59, seconds: 59 };
    case "countDownDays":
      return {
        ...state,
        days: state.days - 1,
        hours: 59,
        minutes: 59,
        seconds: 59,
      };
    case "speedUp":
      if (state.period > 1)
        return {
          ...state,
          period: state.period / 10,
        };
      else {
        return { ...state, period: 1000 };
      }
    default:
      throw new Error();
  }
}

function App() {
  const initialState = {
    days: 14,
    hours: 0,
    minutes: 0,
    seconds: 0,
    period: 1000,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      if (state.seconds > 0) {
        dispatch({ type: "countDownSeconds" });
      } else if (state.minutes > 0) {
        dispatch({ type: "countDownMinutes" });
      } else if (state.hours > 0) {
        dispatch({ type: "countDownHours" });
      } else if (state.days > 0) {
        dispatch({ type: "countDownDays" });
      }
    }, state.period);
    return () => clearInterval(interval);
  }, [state.seconds]);

  return (
    <>
      <main className="font-Red-Hat bg">
        <div className="fixed top-2 right-2 flex flex-col items-center gap-2 w-36 max-md:text-xs">
          <div className="bg-Dark-desaturated-blue p-1 px-3 w-full text-left rounded-lg">
            interval: {state.period}ms
          </div>
          <button
            className="bg-Dark-desaturated-blue p-1 px-3 rounded-lg hover:bg-Soft-red transition-colors"
            title="speed up"
            onClick={() => {
              dispatch({ type: "speedUp" });
              console.log(state.period);
            }}
          >
            &gt;&gt;
          </button>
        </div>
        <section className="max-md:pt-[15vh]">
          <h1 className="max-md:text-lg text-[22px] font-bold uppercase tracking-[7px] max-md:tracking-[5px] max-md:p-10 p-[100px]">
            We're launching soon
          </h1>
          <div
            id="timer"
            className="text-Soft-red text-4xl font-bold flex justify-center max-md:gap-4 gap-8"
          >
            <TimerBlock type="days" value={state.days} />
            <TimerBlock type="hours" value={state.hours} />
            <TimerBlock type="minutes" value={state.minutes} />
            <TimerBlock type="seconds" value={state.seconds} />
          </div>
        </section>
        <section
          id="social"
          className="flex justify-center  gap-8 absolute bottom-14 mx-auto w-screen "
        >
          <svg
            className="z-10  cursor-pointer fill-Grayish-blue hover:fill-Soft-red transition-all duration-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
          </svg>
          <svg
            className="z-10 cursor-pointer fill-Grayish-blue hover:fill-Soft-red transition-all duration-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
          </svg>
          <svg
            className="z-10 cursor-pointer fill-Grayish-blue hover:fill-Soft-red transition-all duration-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </section>
      </main>
      <img
        className=" min-w-max absolute bottom-0 right-0 w-screen -z-10"
        src="pattern-hills.svg"
        alt="hills background"
      />
      <svg
        className="h-screen w-screen absolute top-0 left-0 -z-20"
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="569"
      >
        <path
          fill="#46485B"
          fillRule="evenodd"
          d="M774 563a3 3 0 110 6 3 3 0 010-6zm-623.5-5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm875 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-523-3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm233-7a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM178 542a3 3 0 110 6 3 3 0 010-6zm1127.5 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm45.5-10a3 3 0 110 6 3 3 0 010-6zm-565.5-3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-784-15a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm278.5-9a3 3 0 110 6 3 3 0 010-6zm207.5-30a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm50-17a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm233-8a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm465-22a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-699-6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-465-22a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1165-8a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-50-17a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM250 345a3 3 0 110 6 3 3 0 010-6zm450.5-7a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-614-15a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm520-13a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-570-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1169.5-7a3 3 0 110 6 3 3 0 010-6zm-4.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-875-3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm523 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-392-34a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm656 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-1008-3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1298-7a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-570-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm520-13a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-145.5-9a3 3 0 110 6 3 3 0 010-6zm-601.5-6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm499.5-29a3 3 0 110 6 3 3 0 010-6zm-985.5-10a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-50-17a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1298-8a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-465-22a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-832-6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm33.5-18a3 3 0 110 6 3 3 0 010-6zm431.5-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm366-8a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm50-17a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm486-39a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM1136 29a3 3 0 110 6 3 3 0 010-6zm-614.5-2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM412 23a3 3 0 110 6 3 3 0 010-6zM1.5 14a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm570-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm366-7a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-656-3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1008 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
        />
      </svg>
      <Footer />
    </>
  );
}

export default App;
