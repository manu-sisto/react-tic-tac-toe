
function calculateWinner(arr){
    let winner = "-"
    winner = compare(winner, arr[0],arr[1],arr[2])
    winner = compare(winner, arr[3],arr[4],arr[5])
    winner = compare(winner, arr[6],arr[7],arr[8])
    winner = compare(winner, arr[0],arr[3],arr[6])
    winner = compare(winner, arr[1],arr[4],arr[7])
    winner = compare(winner, arr[2],arr[5],arr[8])
    winner = compare(winner, arr[0],arr[4],arr[8])
    winner = compare(winner, arr[2],arr[4],arr[6])
    if (winner === "O" || winner === "X"){
        return winner;
    }
    return winner;
}

function compare(winner, pos1,pos2,pos3){
    if(pos1 === pos3 && pos1 === pos2 ){
        if(winner === "-"){
            winner = pos1
        }
    }
    return winner;
}

export default calculateWinner;