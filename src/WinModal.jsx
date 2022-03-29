import React from 'react';

const WinModal = (props) => {

    const click = ()=> { 
        props.onChange();
    }

   return (
    <div className='winModal'>
        <div className='winModalWindow'>
            <div className='modalHeader'>
                <p>X just won!</p>
            </div>
            <div className='modalContent'>
                <p>This Game was a practice from Manuel Sisto on React.</p>
            </div>
            <div className='modalFooter'>
                <button className='blue-button' onClick={click}>Play again!</button>
            </div>
        </div>
  </div>
   )
};
 
export default WinModal;