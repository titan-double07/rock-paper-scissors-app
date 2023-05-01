import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";

export default function ScoreBoard() {
  const { score } = useSelector((store) => store.app);
  const scoreRef = useRef()
  // useEffect(() => {
  //     scoreRef.current.classList.remove(`opacity-0`);
    
  // },[])
  // useEffect(() => {
  //   if (score.player1 > 0 || score.player2 > 0)
  //     setTimeout(() => {
  //       scoreRef.current.classList.add(`opacity-0`);
  //       // scoreRef.current.classList.remove(`opacity-0`);
  //     },0);
  // }, [score.player1, score.player2]);


  return (
    <>
      <header className="w-full border-2 border-gray-400 p-3 rounded-xl flex justify-between items-center lg:w-3/4 max-w-screen-lg relative transition-all">
        <p className="flex flex-col font-semibold leading-4 text-xl md:text-4xl md:leading-7  ">
          <span>ROCK</span>
          <span>PAPER</span>
          <span>SCISSORS</span>
        </p>
        <div className="score rounded bg-white flex flex-col items-center px-5 py-2 md:px-10 md:py-3 ">
          <p className="uppercase text-xs text-blue-800 tracking-wide md:text-sm md:tracking-widest">
            score
          </p>
          <div className="opacity-0 transition-all"></div>
          <h1
            ref={scoreRef}
            className="transition text-5xl md:text-6xl font-bold text-[#52505f] flex items-center justify-center  "
          >
            {score.player1}:{score.player2}
          </h1>
        </div>
        <div className="text-xs absolute -bottom-5">Refresh to reset game</div>
      </header>
    </>
  );
}
