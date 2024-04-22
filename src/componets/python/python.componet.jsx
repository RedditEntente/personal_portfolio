import React, { useState} from 'react';




const INITIAL_STATE = {
  board: Array(9).fill(null),
  nextPlayer: 'X',
  winner: null
};

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const TicTacToe = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleClick = (index) => {
    if (state.board[index] || state.winner) return;

    const newBoard = state.board.slice();
    newBoard[index] = state.nextPlayer;

    const winner = calculateWinner(newBoard);
    setState({
      board: newBoard,
      nextPlayer: state.nextPlayer === 'X' ? 'O' : 'X',
      winner
    });
  };

  const calculateWinner = (board) => {
    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
      const [a, b, c] = WINNING_COMBINATIONS[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {state.board[index]}
      </button>
    );
  };

  const renderStatus = () => {
    if (state.winner) {
      return `Winner: ${state.winner}`
      state.board = Array(9).fill(null)
      ;
    } else {
      return `Next player: ${state.nextPlayer}`;
    }
  };

  return (
    <div>
      <div className="status">{renderStatus()}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default TicTacToe;
