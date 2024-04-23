import React, { useState, useEffect } from 'react';
import pythonIcon from './../../assets/images/pngwing.com.png'

import javascriptIcon from './../../assets/images/icons8-javascript-48.png'; 
import javaIcon from './../../assets/images/icons8-java-48.png'; 
import cppIcon from './../../assets/images/icons8-c++-48.png'; 
import csharpIcon from './../../assets/images/c--4.svg'; 
import phpIcon from './../../assets/images/php.svg'; 
import swiftIcon from './../../assets/images/swift.svg'; 
import typescriptIcon from './../../assets/images/typescript-icon.svg'; 
import rubyIcon from './../../assets/images/c-1.svg'; 
import goIcon from './../../assets/images/golang-1.svg'; 

const ROWS = 24;
const COLS = 20;
const CELL_SIZE = 24;

const Direction = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
};

const popularLanguages = [
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'Java', icon: javaIcon },
  { name: 'C++', icon: cppIcon },
  { name: 'C#', icon: csharpIcon },
  { name: 'PHP', icon: phpIcon },
  { name: 'Swift', icon: swiftIcon },
  { name: 'TypeScript', icon: typescriptIcon },
  { name: 'Ruby', icon: rubyIcon },
  { name: 'Go', icon: goIcon },
];

const initialSnake = [{ x: 10, y: 10 }, { x: 9, y: 10 }]; 
const initialFood = { x: 5, y: 5 };

let randomIcon = popularLanguages[Math.floor(Math.random() * popularLanguages.length)].icon;

const SnakeGame = () => {
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(initialFood);
  const [direction, setDirection] = useState(Direction.RIGHT);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [finalSnakeState, setFinalSnakeState] = useState([]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isGameRunning) return;

      switch (e.key) {
        case 'w':
          if (direction !== Direction.DOWN) setDirection(Direction.UP);
          break;
        case 's':
          if (direction !== Direction.UP) setDirection(Direction.DOWN);
          break;
        case 'a':
          if (direction !== Direction.RIGHT) setDirection(Direction.LEFT);
          break;
        case 'd':
          if (direction !== Direction.LEFT) setDirection(Direction.RIGHT);
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [direction, isGameRunning]);

  useEffect(() => {
    const moveSnake = setInterval(() => {
      if (!isGameRunning) return;

      const newSnake = [...snake];
      const head = { ...newSnake[0] };

      switch (direction) {
        case Direction.UP:
          head.y = head.y === 0 ? ROWS - 1 : head.y - 1;
          break;
        case Direction.DOWN:
          head.y = head.y === ROWS - 1 ? 0 : head.y + 1;
          break;
        case Direction.LEFT:
          head.x = head.x === 0 ? COLS - 1 : head.x - 1;
          break;
        case Direction.RIGHT:
          head.x = head.x === COLS - 1 ? 0 : head.x + 1;
          break;
        default:
          break;
      }

      
      if (head.x === food.x && head.y === food.y) {
        
        const randomLanguage = popularLanguages[Math.floor(Math.random() * popularLanguages.length)];
        randomIcon = randomLanguage.icon;
        setFood({
          x: Math.floor(Math.random() * COLS),
          y: Math.floor(Math.random() * ROWS),
        });
      } else {
        newSnake.pop();
      }

      
      if (newSnake.some((segment) => segment.x === head.x && segment.y === head.y)) {
        clearInterval(moveSnake);
        setIsGameOver(true);
        setIsGameRunning(false);
        setFinalSnakeState(newSnake);
        return;
      }

      newSnake.unshift(head);
      setSnake(newSnake);
    }, 200);

    return () => clearInterval(moveSnake);
  }, [direction, snake, food, isGameRunning]);

  const handleStartGame = () => {
    setSnake(initialSnake);
    setFood(initialFood);
    setDirection(Direction.RIGHT);
    setIsGameOver(false);
    setIsGameRunning(true);
    setFinalSnakeState([]);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h1 style={{ fontSize: '24px' }}>Help Python eat up all the market share</h1>
      <p>Use WASD keys to control the snake.</p>
      {isGameRunning && !isGameOver ? (
        <div
          style={{
            width: `${COLS * CELL_SIZE}px`,
            height: `${ROWS * CELL_SIZE}px`,
            
            position: 'relative',
            display: 'inline-block',
          }}
        >
          {snake.map((segment, index) => (
            <div
              key={index}
              style={{
                width: `${CELL_SIZE}px`,
                height: `${CELL_SIZE}px`,
                backgroundImage: `url(${pythonIcon})`,
                backgroundSize: 'cover',
                position: 'absolute',
                top: `${segment.y * CELL_SIZE}px`,
                left: `${segment.x * CELL_SIZE}px`,
              }}
            />
          ))}
          <div
            style={{
              width: `${CELL_SIZE}px`,
              height: `${CELL_SIZE}px`,
              backgroundImage: `url(${randomIcon})`,
              backgroundSize: 'cover',
              position: 'absolute',
              top: `${food.y * CELL_SIZE}px`,
              left: `${food.x * CELL_SIZE}px`,
            }}
          />
        </div>
      ) : (
        <div>
          <p style={{ fontSize: '18px' }}>{isGameOver ? 'Game Over!' : 'Press Start to Play'}</p>
          {isGameOver && finalSnakeState.length > 0 && (
            <div>
              <p>Final Snake State:</p>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {finalSnakeState.map((segment, index) => (
                  <div
                    key={index}
                    style={{
                      width: `${CELL_SIZE}px`,
                      height: `${CELL_SIZE}px`,
                      backgroundImage: `url(${pythonIcon})`,
                      backgroundSize: 'cover',
                      margin: '0 2px',
                    }}
                  />
                ))}
              </div>
            </div>
          )}
          <button
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={handleStartGame}
          >
            Start
          </button>
        </div>
      )}
    </div>
  );
};

export default SnakeGame;
