import {useState} from 'react'

const App = () => {
  const [board,setBoard]=useState(Array(9).fill(0));
  const [isNext,setISNext]=useState(true);
  const Square=({value,onClick})=>{
        return(
          <button className="square" onClick={onClick}>{value}</button>
        )
  }
  const handleClick=(i)=>{
    if(board[i]||isWinner(board[i])) return;
    const newBoard=board.slice();
    newBoard[i]=isNext?'X':'O';
    setBoard(newBoard);
    setISNext(!isNext);
  }
  const isWinner=(board)=>{
     const lines=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
     ];
     for(let i=0;i<lines.length;i++)
     {
      const [a,b,c]=lines[i];
        if(board[a]&&board[a]===board[b]&&board[a]===board[c])
        {
          return board[a];
        }
     }
     return null;

  }
  const winner=isWinner(board);
  const status=winner?`winner :${winner}`:`next player:${isNext? "X":"O"}`;
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={board[0]} onClick={()=>handleClick(0)}/>
        <Square value={board[1]} onClick={()=>handleClick(1)}/>
        <Square value={board[2]} onClick={()=>handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={board[3]} onClick={()=>handleClick(3)}/>
        <Square value={board[4]} onClick={()=>handleClick(4)}/>
        <Square value={board[5]} onClick={()=>handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={board[6]} onClick={()=>handleClick(6)}/>
        <Square value={board[7]} onClick={()=>handleClick(7)}/>
        <Square value={board[8]} onClick={()=>handleClick(8)}/>
      </div>
    </div>
  )
}

export default App
