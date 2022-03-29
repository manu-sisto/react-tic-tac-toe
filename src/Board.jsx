import React, { useEffect, useState } from 'react';
import Square from './Square';
import calculateWinner from './calculateWinner';
import Data from './Data';
import WinModal from './WinModal';

const Board = (props) => {
    const [turno, setTurno] = useState("X");
    const [lugares, setLugares] = useState(["-","-","-","-","-","-","-","-","-"]);
    const [ganador, setGanador] = useState()

    useEffect(()=>{ 
        let winner = calculateWinner(lugares)
        if(winner === "X" || winner === "O") {
            endGame(winner)
        };
    }, [lugares])


    

    const onClick = (i) => {
        if(turno === "-" || turno === "O"){
            setTurno("X")
        } else if (turno === "X") {
            setTurno("O")
        }
        
        setLugares((arr) => {
            arr[i] = turno 
            return [...arr]
        })
    };

    const reiniciar = () => {
        setTurno("X");
        setLugares(() => {
            return ["-","-","-","-","-","-","-","-","-"]
        })
        setGanador()
    };

    const endGame = (ganador) => {
        setGanador(ganador)
        console.log("WINNER IS: ", ganador)
    }
   
   return (
        <React.Fragment>
        <div className='board'>
            {lugares.map((arr, i)=> <Square text={lugares[i]} ganador={ganador} lugar={i} key={i} turno={turno} onChange={onClick}/>)}
        </div>
        {ganador? <WinModal onChange={reiniciar}/>: <div/>}
        <Data  turno={turno} onChange={reiniciar}/>
        
       </React.Fragment>
   )
};
 
export default Board;