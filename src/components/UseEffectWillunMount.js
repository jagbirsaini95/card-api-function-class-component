import { useEffect } from "react";
export default function UseEffectWillunMount(params) {
    useEffect(() => {
      console.log("mounting");
      return () => {
        console.log("unmounting ")
      }
    },[])
    return(
        <>
        <h1>this is for unmounting</h1>
        </>
    )
    
};
