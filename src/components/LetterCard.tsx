import React from 'react';
import '../styles/LetterCard.css'
type LetterCardProps={
    letter:string,
    addLettertoArray:(letter:string)=>void
}

const LetterCard = ({letter,addLettertoArray}:LetterCardProps) => {
  return (
    <div onClick={()=>addLettertoArray(letter)} className="letter-card">
      <div className="twoLetter">
      <h1>{letter.toUpperCase()}</h1>
      <span>{letter.toLowerCase()}</span>
      </div>
    </div>
  );
};

export default LetterCard;