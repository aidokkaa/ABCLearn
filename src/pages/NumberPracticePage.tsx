import React from 'react'
import '../styles/numberPractice.css'
import dybys from '../assets/sounds/a.mp3'
import one from '../assets/sounds/one.mp3'
import two from '../assets/sounds/two.mp3'
import Numbercard from '../components/Numbercard'
const NumberPracticePage = () => {
  const [currentNumberIndex,setCurrentNumberIndex]=React.useState(0)
  const [heardNum,setHeardNum]=React.useState('')
  const startNumberPractice=()=>{
    const audio = new Audio(dybys)
    audio.play();
    console.log(currentNumberIndex)
  }
  const listenNum=()=>{
    const audio = new Audio(numbers[currentNumberIndex].audio)
  audio.play()
  }

  const numbers = [
    { audio: one, number: 4, word: 'Four' },
    { audio: one, number: 9, word: 'Nine' },
    { audio: one, number: 6, word: 'Six' },
    { audio: one, number: 10, word: 'Ten' },
    { audio: one, number: 1, word: 'One' },
    { audio: one, number: 5, word: 'Five' },
    { audio: two, number: 2, word: 'Two' },
    { audio: one, number: 7, word: 'Seven' },
    { audio: one, number: 3, word: 'Three' },
    { audio: one, number: 8, word: 'Eight' }
  ];
  
  
  return (
    <div className='nPracticePage'>
         <div className="nTaskTitle">
         Санды тыңда да, дұрысын таңда!
         </div>
      <div style={{display:'flex'}} className="btnsNum">
      <button onClick={startNumberPractice} className='startNumPracticeClass'>Бастау</button>
      <button onClick={listenNum} className='startNumPracticeClass'>Санды тыңдау</button>
      {
              currentNumberIndex>0 ?<button onClick={listenNum}>Келесі сан</button> : ''
            }
      </div>
         <div className="nCards">
        {
          numbers.map((item,index)=>(
            <>
            <Numbercard numbers = {numbers} setCurrentNumberIndex = {setCurrentNumberIndex}  currentNumberIndex = {currentNumberIndex} itemNUm = {item.number} itemIndex = {index}></Numbercard>
          
            </>
          ))
        }
         </div>
    </div>
  )
}

export default NumberPracticePage