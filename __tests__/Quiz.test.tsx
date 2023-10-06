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






