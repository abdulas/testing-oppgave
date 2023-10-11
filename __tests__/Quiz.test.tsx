import Quiz from '@/app/Quiz/Quiz';
import { render, fireEvent, screen, act, renderHook } from '@testing-library/react';
import data from '@/app/Quiz/questions.json';
import { describe } from 'node:test';



describe('Quiz displays questions number, questions, and answer options', () =>{

  it('check that questions starts with 1', () =>{
    render(<Quiz/>)
  
    const title = document.querySelector('h1');
    expect(title).toHaveTextContent('Spørsmål 1');
  
  })

  test('title should be in the document', () => {
    const { getByText } = render(<Quiz />);
    
    const questionTitle = getByText('Hva er hovedstaden i Norge?');
    expect(questionTitle).toBeInTheDocument();
  
  });
  
  test('Quiz should displays questions and answer options.', () => {
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

})



// ----------------------------------------------------------------------------




describe('Checking if clicking on the options will lead you forward', () => {

  it('if oslo cliced should Proceeding to the next question', () =>{
    render(<Quiz/>)
    expect(document.querySelector('h1')).toHaveTextContent('Spørsmål 1');
    fireEvent.click(screen.getByText('Oslo'));
    expect(document.querySelector('h1')).toHaveTextContent('Spørsmål 2');
  })
  
  it('if Stockholm cliced should Proceeding to the next question', () =>{
    render(<Quiz/>)
    expect(document.querySelector('h1')).toHaveTextContent('Spørsmål 1');
    fireEvent.click(screen.getByText('Stockholm'));
    expect(document.querySelector('h1')).toHaveTextContent('Spørsmål 2');
  })
  
  it('if København cliced should Proceeding to the next question', () =>{
    render(<Quiz/>)
    expect(document.querySelector('h1')).toHaveTextContent('Spørsmål 1');
    fireEvent.click(screen.getByText('København'));
    expect(document.querySelector('h1')).toHaveTextContent('Spørsmål 2');
  })
  
  
  it('if Helsinki cliced should Proceeding to the next question', () =>{
    render(<Quiz/>)
    expect(document.querySelector('h1')).toHaveTextContent('Spørsmål 1');
    fireEvent.click(screen.getByText('Helsinki'));
    expect(document.querySelector('h1')).toHaveTextContent('Spørsmål 2');
  })
  
})

// du må teste useState og da kan du levere trykd

describe('testing Hooks', () =>{
  
  it('should increment poeng when `handelClick` function is called', () => {

    const { result } = renderHook(() => Quiz());

    expect(result.current).toBe();
  })
})









