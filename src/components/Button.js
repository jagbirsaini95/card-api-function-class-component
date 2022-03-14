import React from "react"
import App1 from "../App1"

export default class Button extends App1{
render(){
    return(
        <>
        <button onClick={()=>this.props.myHandler("clicked")}>{this.props.name}</button><br/>
        </>
    );
}
}