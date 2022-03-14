import { useEffect, useState } from "react";

export default function UseEffectDidupdate() {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("component updated ");
    })
    let countHandler=(op)=>{
        if(op==='+'){
            setCount(count+1);
        }
        else{
            setCount(count-1);
        }
    }
    return(
        <>
        {count}<br/>
        <button onClick={()=>countHandler('-')}>-</button>
        <button onClick={()=>countHandler('+')}>+</button>
        </>
    )
};
