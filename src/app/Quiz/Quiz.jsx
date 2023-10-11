"use client"
import data from './questions.json';
import { useAlternativState, usePoengState } from './useQuizState';

const Quiz = () => {
  const { alternativ, alternativHandel, resetAlternativ } = useAlternativState();
  const { poeng, økPoeng, resetPoeng } = usePoengState();
  const questions = data.questions;

  const handelClick = (isRiktig) =>{
    if (isRiktig) {
      økPoeng();
      alternativHandel();
    }
    alternativHandel();
  }

  const resetQiz = () =>{
    resetPoeng();
    resetAlternativ();
  }

  return (
    <div className='quiz-container'>
      {alternativ < questions.length ? (
        <div className='quiz-content'>
          <h1>Spørsmål {alternativ + 1}</h1>
          <h3> {questions[alternativ].title} </h3>
          <p> {questions[alternativ].helper.text} </p>
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
          <h2>Quizen er Ferdig ⚡️</h2>
          <p>Din score er <span className='poeng'>{poeng}</span> av {questions.length} {poeng == 4? "Gratulerer 💥" :null} </p>
          <button onClick={resetQiz}>Ta quizen på nytt</button>
        </div>
      )

      }
    </div>
  );
};

export default Quiz;
