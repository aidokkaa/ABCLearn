import React from 'react';
import '../styles/LetterCard.css'
import { useSound } from '../SoundText';
type LetterCardProps={
    letter:string,
    addLettertoArray:(letter:string)=>void,
    pressedLetters:string[],
    sound:string
}

const LetterCard = ({sound,letter,addLettertoArray,pressedLetters}:LetterCardProps) => {
  const {isSoundOn}=useSound()
   const handleClick = () => {
  addLettertoArray(letter);
  if (isSoundOn) {
    const audio = new Audio(sound);
    audio.play();
  }
};

  return (
       <div
      onClick={handleClick}
      className={!pressedLetters.includes(letter) ? 'letter-card' : 'letter-card1'}
    >
      <div className="twoLetter">
      <h1>{letter.toUpperCase()}</h1>
      <span>{letter.toLowerCase()}</span>
      </div>
    </div>
  );
};

export default LetterCard;