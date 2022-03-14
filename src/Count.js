import { useState } from "react";
export default function Count() {
const [count,setCount ] = useState(0);
let handleCount=()=>{
		setCount(count+1);
	}
return(
		<>
            COUNTER: 
			{count}
            <br/>
			<button onClick={handleCount}>counter</button>
		</>
	);

	}
	