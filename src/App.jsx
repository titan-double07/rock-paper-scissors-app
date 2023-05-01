import React, { Fragment, useEffect } from "react";
import ScoreBoard from "./components/ScoreBoard";
import Main from "./components/Main";
import Rules from "./components/Rules";
import { useDispatch, useSelector } from "react-redux";
import { openRules } from "./features/appSlice";
import FooterLink from "./components/FooterLink";

export default function App() {
  const { isRulesOpen } = useSelector(store => store.app)
  const dispatch = useDispatch()

  return (
    <Fragment>
      <div className="container mx-auto bg-[#1f3756] w-full h-full text-white px-11 py-10 flex flex-col items-center justify-center gap-10  relative tracking-widest">
       {isRulesOpen&& <Rules/>}
        <ScoreBoard />
        <Main />
         <button onClick={()=>{dispatch(openRules())}}  className="border-2 rounded-lg uppercase px-6 py-1 my-5 mt-12 text-xl mx-auto hover:bg-white hover:text-[#1f3756] lg:mr-10 md:text-2xl md:px-7 md:py-1.5 active:bg-gray-400">
          rules
        </button>
       <FooterLink/>
      </div>
    </Fragment>
  );
}
