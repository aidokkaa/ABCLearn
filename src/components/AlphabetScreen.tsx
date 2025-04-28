import React from 'react'
import '../styles/alphabet.css'
import LetterCard from './LetterCard'
import { RiStarSLine } from "react-icons/ri";
import { IoStarSharp } from "react-icons/io5";
import cuteBoy from '../assets/cuteBoy.jpg'
const AlphabetScreen = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const chunkSize = 8;
  const letterChunks = [];
  for(let i = 0;i<letters.length;i+=chunkSize){
    letterChunks.push(letters.slice(i,i+chunkSize))
  }
  const [pageIndex,setpageIndex]=React.useState(0);
  const [stars,setStars]=React.useState([0,0,0])
  const [pressedletters,setPressedLetters]=React.useState<string[]>([]);
 const [finishPage,setFinishPage]=React.useState(false);
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
                  break;
                }
              }
              return newStars;
            })
          }else{
            console.log('все!');
            setFinishPage(true)
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
    
     return (
      <div className={`containerLetters ${bgClasses[pageIndex]}`}> 
       <div className="letters">
       {
        letterChunks[pageIndex].map((letter,index)=>(
          <>
          <LetterCard addLettertoArray = {addLettertoArray} letter= {letter}></LetterCard>
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
      {
        stars.map((item,i)=>(
          <>
            {
              item===0 ? <RiStarSLine /> : <IoStarSharp />
            }
          </>
        ))
      }
      </div>
    )


  }
  




export default AlphabetScreen

