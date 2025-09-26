import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
export const  TypingEffect=()=>{
  const typedEl = useRef(null);
  useEffect(()=>{
     const options = {
      strings: ["Software Developer",
       "Full Stack Developer",
       "Backend Enthusiast",
       "Problem Solver",
       "Tech Explorer"],
      typeSpeed: 40,
      backSpeed: 30,
      loop: true,
    };
     const typed = new Typed(typedEl.current, options);
       return () => {
      typed.destroy();
    };
  },[])
  return(
    <>
     <span ref={typedEl} />;

    </>
  )
}