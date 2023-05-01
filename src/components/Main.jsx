import React, { useCallback, useEffect } from "react";
import { GiRock, GiPaper, GiScissors } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { makeMove } from "../features/appSlice";
import Decision from "./Decision";
export default function Main() {
  const { userMove } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  function handleClick(e) {
    e.stopPropagation();
    let id = e.currentTarget.id;
    dispatch(makeMove({ id }));
  }
  // console.log(rematch);
  // if (rematch)
  //   return (
  //     <div className=" mx-auto pt-10 w-3/4 bg-triangle  ">
  //       <div className=" w-full h-full mx-auto flex flex-col items-center justify-center gap-12 md:gap-16 text-[#1f3756]">
  //         <div className="flex gap-16 md:gap-28 ">
  //           <div
  //             id="rock"
  //             onClick={handleClick}
  //             className=" circle border-red-500 shadow-red-500"
  //           >
  //             <GiRock className="rotate-45" />
  //           </div>
  //           <div
  //             id="paper"
  //             onClick={handleClick}
  //             className=" circle border-yellow-500 shadow-yellow-500"
  //           >
  //             <GiPaper className="-rotate-[60deg] transform -scale-x-100  " />
  //           </div>
  //         </div>
  //         <div
  //           id="scissors"
  //           onClick={handleClick}
  //           className=" circle border-blue-500 shadow-blue-500"
  //         >
  //           <GiScissors className="-rotate-90" />
  //         </div>
  //       </div>
  //     </div>
  //   );
  return (
    <div>
      {!!!userMove ? (
        <div className=" mx-auto pt-10 w-3/4 bg-triangle  ">
          <div className=" w-full h-full mx-auto flex flex-col items-center justify-center gap-12 md:gap-16 text-[#1f3756]">
            <div className="flex gap-16 md:gap-28 ">
              <div
                id="rock"
                onClick={handleClick}
                className=" circle border-red-500 shadow-red-500"
              >
                <GiRock className="rotate-45" />
              </div>
              <div
                id="paper"
                onClick={handleClick}
                className=" circle border-yellow-500 shadow-yellow-500"
              >
                <GiPaper className="-rotate-[60deg] transform -scale-x-100  " />
              </div>
            </div>
            <div
              id="scissors"
              onClick={handleClick}
              className=" circle border-blue-500 shadow-blue-500"
            >
              <GiScissors className="-rotate-90" />
            </div>
          </div>
        </div>
      ) : (
        <Decision userMove={userMove} />
      )}
    </div>
  );
}
