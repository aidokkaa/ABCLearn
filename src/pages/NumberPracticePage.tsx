import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/numberPractice.css'
import dybys from '../assets/sounds/a.mp3'
import one from '../assets/sounds/one.mp3'
import two from '../assets/sounds/two.mp3'
import three from '../assets/sounds/three.mp3'
import four from '../assets/sounds/four.mp3'
import five from '../assets/sounds/five.mp3'
import six from '../assets/sounds/six.mp3'
import seven from '../assets/sounds/seven.mp3'
import eight from '../assets/sounds/eight.mp3'
import nine from '../assets/sounds/nine.mp3'
import ten from '../assets/sounds/ten.mp3'
import Numbercard from '../components/Numbercard'
export type numberItem ={
  audio: string,
  number:number,
  word:string
}
const NumberPracticePage = () => {
  const numbers:numberItem[] = [
    { audio: one, number: 1, word: 'One' },
    { audio: two, number: 2, word: 'Two' },
    { audio: three, number: 3, word: 'Three' },
    { audio: four, number: 4, word: 'Four' },
    { audio: five, number: 5, word: 'Five' },
    { audio: six, number: 6, word: 'Six' },
    { audio: seven, number: 7, word: 'Seven' },
    { audio: eight, number: 8, word: 'Eight' },
    { audio: nine, number: 9, word: 'Nine' },
    { audio: ten, number: 10, word: 'Ten' }
  ];
  
  const [currentNumberIndex,setCurrentNumberIndex]=React.useState(0)
  const [shuffledNumbers, setShuffledNumbers] = React.useState<numberItem[]>([])

  const shuffle = (array:numberItem[]):numberItem[] => {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
  const startNumberPractice=()=>{
    const audio = new Audio(dybys)
    audio.play();
   const shuffled:numberItem[] = shuffle(numbers);
    setShuffledNumbers(shuffled)
    setCurrentNumberIndex(0)
  }

  const listenNum=()=>{
    if (shuffledNumbers.length === 0) return
    const audio = new Audio(shuffledNumbers[currentNumberIndex].audio)
  audio.play()
  }


  return (
    <div className='nPracticePage'>
      <Link className='link' to='/home'><div>🏠</div></Link>
     
         <div className="nTaskTitle">
         Санды тыңда да, дұрысын таңда!
         </div>
      <div style={{display:'flex'}} className="btnsNum">
      <button onClick={startNumberPractice} className='startNumPracticeClass'>Бастау</button>
      <button onClick={listenNum} className='startNumPracticeClass'>Санды тыңдау</button>
      {
              currentNumberIndex>0 ?<button className='startNumPracticeClass' onClick={listenNum}>Келесі сан</button> : ''
            }
      </div>
         <div className="nCards">
        {
          numbers.map((item,index)=>(
            <>
            <Numbercard  shuffledNumbers = {shuffledNumbers} numbers = {numbers} setCurrentNumberIndex = {setCurrentNumberIndex}  currentNumberIndex = {currentNumberIndex} itemNUm = {item.number} itemIndex = {index}></Numbercard>
          
            </>
          ))
        }
         </div>
    </div>
  )
}

export default NumberPracticePage