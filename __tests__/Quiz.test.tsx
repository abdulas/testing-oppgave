import Quiz from '@/app/Quiz/Quiz';

import { render, fireEvent, screen } from '@testing-library/react';
import data from '@/app/Quiz/questions.json';
import { title } from 'process';
import { Qwigley } from 'next/font/google';

// test(nanme, fn, timout)
// it(name, fn, timout)



test('Quiz viser spørsmål og svaralternativer', () => {
  const { getByText } = render(<Quiz />);
  const questions = data.questions;

  

  const questionText1 = getByText(questions[0].title);
  expect(questionText1).toBeInTheDocument();

  const answerOption2 = getByText(questions[0].answers[0].answer);
  expect(answerOption2).toBeInTheDocument();

  const answerOption3 = getByText(questions[0].answers[1].answer);
  expect(answerOption3).toBeInTheDocument();

  const answerOption4 = getByText(questions[0].answers[2].answer);
  expect(answerOption4).toBeInTheDocument();

  const answerOption5 = getByText(questions[0].answers[3].answer);
  expect(answerOption5).toBeInTheDocument();

});


test('handelClick funksjonen øker poengsummen riktig', () => {
  const { getByText } = render(<Quiz />);
  
  const questionTitle = getByText('Hva er hovedstaden i Norge?');
  expect(questionTitle).toBeInTheDocument();

});






