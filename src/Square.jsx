import React, { useState, useEffect } from 'react';

const Square = (props) => {
    
    useEffect(()=>{
        setText(props.text)
    }, [props.text])
    
    const [text, setText] = useState(props.text);

    const classes = `square ${props.ganador} box-${text}`

    const click = ()=> {
        if(text === "-"){
            props.onChange(props.lugar)
            setText(text)
        } else {
            console.log("This slot has already been played!")
        }
    }

   return (
    <button disabled={props.ganador? true: false} className={classes} onClick={click} >{text}</button>
   )
};
 
export default Square;