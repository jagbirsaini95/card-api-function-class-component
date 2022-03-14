import React,{useEffect, useState} from 'react'
let tempcount=1;
export default function UseEffectDidMount() {
    const [flag,setFlag]=useState(true);
    const [count,setCount]=useState(0);
    useEffect(()=>{
    console.log("component did mount "+tempcount++);
    // setTimeout(() => {
    //     console.log("message after 5 seconds of mounting component ");
    //   }, 5000)
    },[] //if we pass variable in array then it will behave like did update
    )
    let countHandler=()=>{
            setCount(count+1);
         }
    return (<>
        this is for useEffect function for mounting<br/>

        {count +'  '+ flag.toString()} <br/>
        <button onClick={()=>countHandler()}>+</button>
        <button onClick={()=>setFlag(!flag)}>toggle</button>
    </>    
    )
};

