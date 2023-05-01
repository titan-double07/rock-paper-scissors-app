import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GiPaper, GiRock, GiScissors } from "react-icons/gi";
import { useRef } from "react";
import { calculateScore, getResult, rematch } from "../features/appSlice";
export default function Decision({ userMove }) {
  const movesArr = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * movesArr.length);
  const [player1Move] = useState(userMove);
  const [player2Move] = useState(movesArr[random]);
  const [player1, setPlayer1] = useState(player1Move);
  const [player2, setPlayer2] = useState(player2Move);
  const player1Ref = useRef();
  const player2Ref = useRef();
  const resultRef = useRef();
  const dispatch = useDispatch();
  const { result } = useSelector((store) => store.app);

  // Display Decision Logic
  useEffect(() => {
    // if(userMove)
    // get claculate score
    // const delayCalculation = () => { }

    // dispatch(calculateScore());
    const calcScoreTimer = setTimeout(() => {
      dispatch(calculateScore());
    }, 2000);
    calcScoreTimer;
    // delay in diplaying player moves
    const showPlayer2 = () => {
      player2Ref.current.classList.remove("opacity-0")
    };
    const showPlayer1 = () => {
      player1Ref.current.classList.remove("opacity-0")
    }
    const showResult = () => {
     resultRef.current.classList.add("opacity-100")
    };

   setTimeout(showPlayer1, 500);
    setTimeout(showPlayer2, 1000);
     setTimeout(showResult, 1500);


    function getWinner(player1, player2) {
      if (player1 === player2) {
        return "it's a  tie";
      } else if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "paper" && player2 === "rock") ||
        (player1 === "scissors" && player2 === "paper")
      ) {
        return "you win";
      } else {
        return "you lose";
      }
    }

    dispatch(getResult(getWinner(player1Move, player2Move)));
    // user move switch statemwnt
    switch (player1) {
      case "rock":
        setPlayer1(
          <div
            id="rock"
            className=" circle text-[#1f3756] border-red-500 shadow-red-500"
          >
            <GiRock />
          </div>
        );
        break;
      case "paper":
        setPlayer1(
          <div
            id="rock"
            className=" circle text-[#1f3756] border-yellow-500 shadow-yellow-500"
          >
            <GiPaper />
          </div>
        );
        break;
      case "scissors":
        setPlayer1(
          <div
            id="scissors"
            className=" circle text-[#1f3756] border-blue-500 shadow-blue-500"
          >
            <GiScissors />
          </div>
        );
        break;

      default:
        break;
    }
    // player2 switch statement
    switch (player2) {
      case "rock":
        setPlayer2(
          <div
            id="rock"
            className=" circle text-[#1f3756] border-red-500 shadow-red-500"
          >
            <GiRock className="rotate-180 transform -scale-y-100" />
          </div>
        );
        break;
      case "paper":
        setPlayer2(
          <div
            id="rock"
            className=" circle text-[#1f3756] border-yellow-500 shadow-yellow-500"
          >
            <GiPaper className="rotate-0 transform -scale-x-100  " />
          </div>
        );
        break;
      case "scissors":
        setPlayer2(
          <div
            id="scissors"
            className=" circle text-[#1f3756] border-blue-500 shadow-blue-500"
          >
            <GiScissors className="transform -scale-x-100" />
          </div>
        );
        break;

      default:
        break;
    }

    return () => {
      clearTimeout(calcScoreTimer)
       
    }
  }, []);

  // //////////////////////

  return (
    !!userMove && (
      <div className="flex flex-col space-y-16 pt-14">
        <div className="w-full flex space-x-28  ">
          <div
            ref={player1Ref}
            className="opacity-0 transition-opacity duration-1000 "
          >
            {player1}
            <p className="text-xl text-center">Player 1</p>
          </div>
          <div
            ref={player2Ref}
            className="opacity-0 transition-opacity duration-1000  flex flex-col relative"
          >
            {player2}
            <p className="text-xl text-center  ">Player 2</p>
          </div>
        </div>

        <div
          ref={resultRef}
          className={` result opacity-0 transition-opacity duration-1000 flex flex-col space-y-6 `}
        >
          <h1 className="uppercase text-6xl text-center">{result || "null"}</h1>
          <button
            onClick={() => dispatch(rematch())}
            className="rounded-lg bg-white text-[#1f3756] uppercase mx-auto w-3/5 py-2.5 hover:bg-[#1f3756] hover:border hover:border-white hover:text-white transition-all tracking-widest active:bg-gray-600"
          >
            play again
          </button>
        </div>
      </div>
    )
  );
}
