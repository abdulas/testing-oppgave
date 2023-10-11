"use clinet"
import { useState } from 'react';
import data from './questions.json';
const questions = data.questions;

export function useAlternativState() {
  const [alternativ, setAlternativ] = useState(0);

  const alternativHandel = () => {

      if (alternativ + 1 < questions.length) {
        setAlternativ(alternativ + 1)
      }
      
      else {
        setAlternativ(questions.length);
      }
  
  }

  const resetAlternativ = () => {
    setAlternativ(0);
  }

  return { alternativ, alternativHandel, resetAlternativ };
}


//---------------------------------------------------------------------------------------------


export function usePoengState() {
  const [poeng, setPoeng] = useState(0);

  const økPoeng = () => {
    setPoeng(poeng + 1);
  }

  const resetPoeng = () => {
    setPoeng(0);
  }

  return { poeng, økPoeng, resetPoeng };
}
