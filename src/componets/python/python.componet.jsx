import React, { useState, useEffect } from 'react';
import pythonIcon from './../../assets/images/pngwing.com.png'

import javascriptIcon from './../../assets/images/icons8-javascript-48.png'; // Import JavaScript language icon
import javaIcon from './../../assets/images/icons8-java-48.png'; // Import Java language icon
import cppIcon from './../../assets/images/icons8-c++-48.png'; // Import C++ language icon
import csharpIcon from './../../assets/images/c--4.svg'; // Import C# language icon
import phpIcon from './../../assets/images/php.svg'; // Import PHP language icon
import swiftIcon from './../../assets/images/swift.svg'; // Import Swift language icon
import typescriptIcon from './../../assets/images/typescript-icon.svg'; // Import TypeScript language icon
import rubyIcon from './../../assets/images/c-1.svg'; // Import Ruby language icon
import goIcon from './../../assets/images/golang-1.svg'; // Import Go language icon

const ROWS = 20;
const COLS = 20;
const CELL_SIZE = 25;

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

const initialSnake = [{ x: 10, y: 10 }, { x: 9, y: 10 }]; // Initial snake length set to 2
const initialFood = { x: 5, y: 5 };

const randomIcons = popularLanguages[Math.floor(Math.random(0,popularLanguages.length))];
let randomIcon = randomIcons.icon


const SnakeGame = () => {
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(initialFood);
  const [direction, setDirection] = useState(Direction.RIGHT);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameRunning, setIsGameRunning] = useState(false);

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
          head.y -= 1;
          break;
        case Direction.DOWN:
          head.y += 1;
          break;
        case Direction.LEFT:
          head.x -= 1;
          break;
        case Direction.RIGHT:
          head.x += 1;
          break;
        default:
          break;
      }

      // Check for collision with wallss
      if (
        head.x < 0 ||
        head.x >= COLS ||
        head.y < 0 ||
        head.y >= ROWS ||
        newSnake.slice(1).some((segment) => segment.x === head.x && segment.y === head.y)
      ) {
        clearInterval(moveSnake);
        setIsGameOver(true);
        setIsGameRunning(false);
        return;
      }

      newSnake.unshift(head);

      // Check if snake eats food
      if (head.x === food.x && head.y === food.y) {
        
        
          // Randomly select a language from the popularLanguages array
          const randomLanguage = popularLanguages[Math.floor(Math.random() * popularLanguages.length)];
          randomIcon = randomLanguage.icon
          setFood({
            x: Math.floor(Math.random() * COLS),
            y: Math.floor(Math.random() * ROWS),
            icon: randomLanguage.icon,
            language: randomLanguage.name,
          });
        
        
      } else {
        newSnake.pop();
      }

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
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Help Python eat up all the market share</h1>
      <p>Use WASD keys to control the snake.</p>
      {isGameRunning && !isGameOver ? (
        <div
          style={{
            width: `${COLS * CELL_SIZE}px`,
            height: `${ROWS * CELL_SIZE}px`,
            border: '1px solid black',
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
          <p>{isGameOver ? 'Game Over!' : 'Press Start to Play'}</p>
          <button onClick={handleStartGame}>Start</button>
        </div>
      )}
    </div>
  );
};

export default SnakeGame;
