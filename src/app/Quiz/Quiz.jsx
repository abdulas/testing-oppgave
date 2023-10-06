"use client"
import React, { useState } from 'react';
import data from './questions.json';

const Quiz = () => {
  const [alternativ, setAlternativ] = useState(0);
  const [poeng, setPoeng] = useState(0);
  const questions = data.questions;

  const handelClick = (isRiktig) => {

    if (isRiktig) {
      setAlternativ(alternativ);
      setPoeng(poeng + 1);

    }
    if (alternativ + 1 < questions.length) {
      setAlternativ(alternativ + 1)
    }
    
    else {
      setAlternativ(questions.length);
    }

  }

  const resetQiz = () => {
    setAlternativ(0);
    setPoeng(0);
  }

  return (
    <div className='quiz-container'>
      {alternativ < questions.length ? (
        <div className='quiz-content'>
          <h1>Spørsmål {alternativ + 1}</h1>
          <h3> {questions[alternativ].title} </h3>
          <ul>
            {
              questions[alternativ].answers.map((i, index) => (
                <li
                  key={index}
                  onClick={() => handelClick(i.correct)}
                > {i.answer}
                </li>
              ))
            }
          </ul>
        </div>
      ) : (
        <div className='result'>
          <h1>Quizen er Ferdig ⚡️</h1>
          <p>Din score er <span className='poeng'>{poeng}</span> av {questions.length} {poeng == 4? "Gratulerer 💥" :null} </p>
          <button onClick={resetQiz}>Ta quizen på nytt</button>
        </div>
      )

      }
    </div>
  );
};

export default Quiz;
