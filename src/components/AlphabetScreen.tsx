import React from 'react'
import '../styles/alphabet.css'
import confetti from 'canvas-confetti';
import tadaSound from '../assets/sounds/tada.mp3'
import LetterCard from './LetterCard'
import { RiStarSLine } from "react-icons/ri";
import { IoStarSharp } from "react-icons/io5";
import shineSound from '../assets/sounds/shineLetter.mp3'
import cuteBoy from '../assets/cuteBoy.jpg'
const AlphabetScreen = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const chunkSize = 8;
  const letterChunks = [];
  for(let i = 0;i<letters.length;i+=chunkSize){
    letterChunks.push(letters.slice(i,i+chunkSize))
  }
  const [pageIndex,setpageIndex]=React.useState(0);
  const [stars,setStars]=React.useState([0,0,0,0])
  const [pressedletters,setPressedLetters]=React.useState<string[]>([]);
 const [finishPage,setFinishPage]=React.useState(false);
 const starSound = new Audio(shineSound);
 const successSound = new Audio(tadaSound);
 const playStarSound = () => {
  starSound.currentTime = 0; 
  starSound.play();
  console.log('played')
};
  const addLettertoArray= (letter:string)=>{
    setPressedLetters((prevPressedLetters)=>{
      if(!prevPressedLetters.includes(letter) && letterChunks[pageIndex].includes(letter)){
        const newArr = prevPressedLetters.slice();
        newArr.push(letter);
        if(newArr.filter(letter=>letterChunks[pageIndex].includes(letter)).length===letterChunks[pageIndex].length){
          if(pageIndex<letterChunks.length-1){
            setpageIndex(prevInd=>prevInd+1);
            setStars(prevStars=>{
              const newStars = [...prevStars];
              for(let i = 0;i<newStars.length;i++){
                if(newStars[i]===0){
                  newStars[i]=1;
                  playStarSound()
                  break;
                }
             
              }
              return newStars;
            })
            // playStarSound()
          }else{
            setStars(prevStars=>{
              const newStars = [...prevStars];
              for(let i = 0;i<newStars.length;i++){
                if(newStars[i]===0){
                  newStars[i]=1;
                  break;
                }
             
              }
              return newStars;
            })
            
            console.log('все!');
        
            setFinishPage(true)
            successSound.play();
            confetti({
              particleCount: 150,
              spread: 70,
              origin: { y: 0.6 },
            });
          }
        }
        console.log(newArr)
        return newArr;
      }
      return prevPressedLetters;
    });

    };
    const goToBack=()=>{
      setpageIndex(0);
      setPressedLetters([]);
      setFinishPage(false)
    }
    const nextPage = ()=>{
      if(pageIndex<letterChunks.length-1){
       setpageIndex(pageIndex+1)
      }
     }
     const prevPage = ()=>{
       if(pageIndex>0){
         setpageIndex(pageIndex-1);
       }
     }
     const bgClasses = ['bg-page-0', 'bg-page-1', 'bg-page-2'];
    
     React.useEffect(() => {
      if (finishPage) {
        const duration = 2 * 1000; // 2 секунды
        const end = Date.now() + duration;
    
        (function frame() {
          confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
          });
          confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
          });
    
          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        })();
      }
    }, [finishPage]);
     return (
      <div className={`containerLetters ${bgClasses[pageIndex]}`}> 
       <div className="letters">
       {
        letterChunks[pageIndex].map((letter,index)=>(
          <>
          <LetterCard pressedLetters = {pressedletters} addLettertoArray = {addLettertoArray} letter= {letter}></LetterCard>
          </>
        ))
      }  
       </div>
       <p>📖 Страница {pageIndex + 1} из {letterChunks.length}</p>
       <div onClick={nextPage}>Next</div>
       <div onClick={prevPage}>Prev</div>
       {
        finishPage && (
          <>
          <h2>Молодецц</h2>
          <button onClick={goToBack}>Начать сначала</button>
          </>
        )
       }
{stars.map((item, i) => (
  <div
    key={i}
    className={`star ${item === 1 ? 'active' : ''}`}
  >
    {item === 0 ? <RiStarSLine /> : <IoStarSharp />}
  </div>
))}

      </div>
    )


  }
  




export default AlphabetScreen

