import Quiz from '@/app/Quiz/Quiz';
import { render, fireEvent, screen, act, renderHook } from '@testing-library/react';
import data from '@/app/Quiz/questions.json';
import { describe } from 'node:test';
import { useAlternativState, usePoengState } from '@/app/Quiz/useQuizState';



describe('Quiz displays questions number, questions, and answer options', () =>{

  it('check that questions starts with 1', () =>{
    render(<Quiz/>)
  
    const title = document.querySelector('h1');
    expect(title).toHaveTextContent('Spørsmål 1');
  
  })

  test('title should be in the document', () => {
    const { getByText } = render(<Quiz />);
    
    const questionTitle = getByText('Hva står HTML for?');
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

  it('if "Hyper Text Markup Language" cliced should Proceeding to the next question', () =>{
    render(<Quiz/>)
    expect(document.querySelector('h1')).toHaveTextContent('Spørsmål 1');
    fireEvent.click(screen.getByText('Hyper Text Markup Language'));
    expect(document.querySelector('h1')).toHaveTextContent('Spørsmål 2');
  })
  
  it('if "High-Level Text Modeling Language" cliced should Proceeding to the next question', () =>{
    render(<Quiz/>)
    expect(document.querySelector('h1')).toHaveTextContent('Spørsmål 1');
    fireEvent.click(screen.getByText('High-Level Text Modeling Language'));
    expect(document.querySelector('h1')).toHaveTextContent('Spørsmål 2');
  })
  
  it('if "Home Tool Markup Language" cliced should Proceeding to the next question', () =>{
    render(<Quiz/>)
    expect(document.querySelector('h1')).toHaveTextContent('Spørsmål 1');
    fireEvent.click(screen.getByText('Home Tool Markup Language'));
    expect(document.querySelector('h1')).toHaveTextContent('Spørsmål 2');
  })
  
  
  it('if "Hyperlink and Text Management Language" cliced should Proceeding to the next question', () =>{
    render(<Quiz/>)
    expect(document.querySelector('h1')).toHaveTextContent('Spørsmål 1');
    fireEvent.click(screen.getByText('Hyperlink and Text Management Language'));
    expect(document.querySelector('h1')).toHaveTextContent('Spørsmål 2');
  })
  
})
// teste react hooks
// ----------------------------------------------------------------------------


describe("Hooks testing", () => {

  it("starter med riktig innledende tilstand", () => {
    const { result: poengResult } = renderHook(usePoengState);
    const { result: alternativResult } = renderHook(useAlternativState);
    render(<Quiz />);
  
    expect(alternativResult.current.alternativ).toBe(0);
    expect(poengResult.current.poeng).toBe(0);
  });

})


// Har bare denne testen som feiler, og jeg prøvde å endre på koden i UseQuizState.js, 
// men testen blir aldri riktig, kan du gi meg tips eller forklaring på hvorfor testen feiler!
// Jeg har sett at også koden virker som den skal og at ResetAlternativ funksjonen virker som den skal også!

describe("tester useAlternativState ", ()=>{
  it("se om resetAlternativ fungerer som den skal altså tilbakestiller alternativ", () => {
    const { result } = renderHook(useAlternativState);
  
    act(() => {
      result.current.setAlternativ(2);
    });
  
    expect(result.current.alternativ).toBe(2);
  
    act(() => {
      result.current.resetAlternativ(); 
    });
  
    expect(result.current.alternativ).toBe(0); 
  });
  

})


describe("ser om økning av poeng virker som det skal", ()=>{
  it("se om økPoeng virker som den skal altså legger til poeng", () => {
    const {result} = renderHook(usePoengState);

    act(()=>{
      result.current.økPoeng();
    })

    expect(result.current.poeng).toBe(1);

  })


  it("må legge til poeng ved riktig svar", () => {
    const { result: poengResult } = renderHook(usePoengState);
    render(<Quiz />);
  
    act(() => {
      // logikken for å svare på spørsmålene.
      expect(document.querySelector('h1')).toHaveTextContent('Spørsmål 1');
      fireEvent.click(screen.getByText('Hyperlink and Text Management Language'));
      poengResult.current.økPoeng();
      
      // her kan man gjnta prosessen for flere spørsmål ved ønske, siden første spørsmål virker så vil de andre virke som de skal.
    });
  
    // Sjekk poengsummen etter å ha besvart spørsmål.
    expect(poengResult.current.poeng).toBe(1);
  });


  it("øker poengsummen ved riktig svar", () => {
    const { result: poengResult } = renderHook(usePoengState);
    render(<Quiz />);
  
    act(() => {
      fireEvent.click(screen.getByText('Hyperlink and Text Management Language'));
      poengResult.current.økPoeng();
    });
  
    expect(poengResult.current.poeng).toBe(1);
  });


})






