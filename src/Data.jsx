import React from 'react';

const Data = (props) => {
    const classes = `databox `
    const click = ()=> { 
        props.onChange();
    }

   return (
       <div className={classes}>
           <p>It's the run of: {props.turno}</p>
           <button className='blue-button' onClick={click}>Re-Start</button>
           <div></div>
       </div>
   )
};
 
export default Data;