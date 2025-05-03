import React from 'react';
import '../styles/LetterCard.css'
type LetterCardProps={
    letter:string,
    addLettertoArray:(letter:string)=>void,
    pressedLetters:string[]
}

const LetterCard = ({letter,addLettertoArray,pressedLetters}:LetterCardProps) => {
  return (
    <div onClick={()=>addLettertoArray(letter)} className={!pressedLetters.includes(letter)?'letter-card' :'letter-card1'}>
      <div className="twoLetter">
      <h1>{letter.toUpperCase()}</h1>
      <span>{letter.toLowerCase()}</span>
      </div>
    </div>
  );
};

export default LetterCard;