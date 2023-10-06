import Quiz from '@/app/Quiz/Quiz';
import { render, fireEvent, screen } from '@testing-library/react';
import data from '@/app/Quiz/questions.json';

test('Quiz viser spørsmål og svaralternativer', () => {
  const { getByText } = render(<Quiz />);
  
  const questionText = getByText('Hva er hovedstaden i Norge?');
  expect(questionText).toBeInTheDocument();

  const answerOption = getByText('Oslo');
  expect(answerOption).toBeInTheDocument();
});

test('Quiz ends when all questions are answered', () => {
  const { getByText, queryByText } = render(<Quiz />);
  const answerButtons = document.querySelectorAll('li'); // Finn alle svaralternativer
  answerButtons.forEach((button) => {
    fireEvent.click(button);
  });
  const questionText = queryByText('Spørsmål 1:'); // Endre dette basert på hvordan spørsmålene vises
  expect(questionText).not.toBeInTheDocument();
});
