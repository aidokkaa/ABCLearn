import React from 'react'
import '../styles/alphabet.css'
import { useSound } from '../SoundText';
import confetti from 'canvas-confetti';
import tadaSound from '../assets/sounds/tada.mp3'
import LetterCard from './LetterCard'
import { RiStarSLine } from "react-icons/ri";
import { IoStarSharp } from "react-icons/io5";
import shineSound from '../assets/sounds/shineLetter.mp3'
import { Link } from 'react-router-dom';
import a from '../assets/sounds/a.mp3';
import b from '../assets/sounds/b.mp3';
import c from '../assets/sounds/c.mp3';
import d from '../assets/sounds/d.mp3';
import e from '../assets/sounds/e.mp3';
import f from '../assets/sounds/f.mp3';
import g from '../assets/sounds/g.mp3';
import h from '../assets/sounds/h.mp3';
import i from '../assets/sounds/i.mp3';
import j from '../assets/sounds/j.mp3';
import k from '../assets/sounds/k.mp3';
import l from '../assets/sounds/l.mp3';
import m from '../assets/sounds/m.mp3';
import n from '../assets/sounds/n.mp3';
import o from '../assets/sounds/o.mp3';
import p from '../assets/sounds/p.mp3';
import q from '../assets/sounds/q.mp3';
import r from '../assets/sounds/r.mp3';
import s from '../assets/sounds/s.mp3';
import t from '../assets/sounds/t.mp3';
import u from '../assets/sounds/u.mp3';
import v from '../assets/sounds/v.mp3';
import w from '../assets/sounds/w.mp3';
import x from '../assets/sounds/x.mp3';
import y from '../assets/sounds/y.mp3';
import z from '../assets/sounds/z.mp3';
type lettersType = {
  letter:string,
  sound:string
}
const AlphabetScreen:React.FC = () => {
   const { isSoundOn, toggleSound } = useSound();
  const letters:lettersType[] = [
  { letter: 'A', sound: a },
  { letter: 'B', sound: b },
  { letter: 'C', sound: c },
  { letter: 'D', sound: d },
  { letter: 'E', sound: e },
  { letter: 'F', sound: f },
  { letter: 'G', sound: g },
  { letter: 'H', sound: h },
  { letter: 'I', sound: i },
  { letter: 'J', sound: j },
  { letter: 'K', sound: k },
  { letter: 'L', sound: l },
  { letter: 'M', sound: m },
  { letter: 'N', sound: n },
  { letter: 'O', sound: o },
  { letter: 'P', sound: p },
  { letter: 'Q', sound: q },
  { letter: 'R', sound: r },
  { letter: 'S', sound: s },
  { letter: 'T', sound: t },
  { letter: 'U', sound: u },
  { letter: 'V', sound: v },
  { letter: 'W', sound: w },
  { letter: 'X', sound: x },
  { letter: 'Y', sound: y },
  { letter: 'Z', sound: z },
];

const chunkSize = 8;
const letterChunks: lettersType[][] = [];

for (let i = 0; i < letters.length; i += chunkSize) {
  letterChunks.push(letters.slice(i, i + chunkSize));
}

  const [pageIndex,setpageIndex]=React.useState(0);
  const [stars,setStars]=React.useState([0,0,0,0])
  const [pressedletters,setPressedLetters]=React.useState<string[]>([]);
 const [finishPage,setFinishPage]=React.useState(false);
 const starSound = new Audio(shineSound);
 const successSound = new Audio(tadaSound);
const playStarSound = () => {
  if (!isSoundOn) return; 
  starSound.currentTime = 0;
  starSound.play();
};

const addLettertoArray = (letter: string) => {
  setPressedLetters((prevPressedLetters) => {
    if (
      !prevPressedLetters.includes(letter) &&
      letterChunks[pageIndex].some(item => item.letter === letter)
    ) {
      const newArr = [...prevPressedLetters, letter];

      const pressedCount = newArr.filter(l =>
        letterChunks[pageIndex].some(item => item.letter === l)
      ).length;

      if (pressedCount === letterChunks[pageIndex].length) {
        if (pageIndex < letterChunks.length - 1) {
          setpageIndex(prevInd => prevInd + 1);
          setStars(prevStars => {
            const newStars = [...prevStars];
            for (let i = 0; i < newStars.length; i++) {
              if (newStars[i] === 0) {
                newStars[i] = 1;
                playStarSound();
                break;
              }
            }
            return newStars;
          });
        } else {
          setStars(prevStars => {
            const newStars = [...prevStars];
            for (let i = 0; i < newStars.length; i++) {
              if (newStars[i] === 0) {
                newStars[i] = 1;
                break;
              }
            }
            return newStars;
          });
          setFinishPage(true);

if (isSoundOn) {
  successSound.currentTime = 0;
  successSound.play();
}
          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
          });
        }
      }

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
        const duration = 2 * 1000; 
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
   <div style={{display:'flex',gap:'30px'}}>
        <Link className='link' to='/'><div>🏠</div></Link>
        <button className="header-btn" onClick={toggleSound}>
          {isSoundOn ? '🔊' : '🔇'}
        </button>
   </div>
      <div className='lts'>
        <h1 className='lettersTitle'>Әріптерді басып көр! Тыңда, қайтала, жатта! 👦</h1>
      
        </div>
        <div className="stars">
  {stars.map((item, i) => (
  <div
    key={i}
    className={`star ${item === 1 ? 'active' : ''}`}
  >
    {item === 0 ? <RiStarSLine /> : <IoStarSharp />}
  </div>
))}
</div>
       <div className="letters">
       {
        letterChunks[pageIndex].map((item,index)=>(
          <>
     <LetterCard 
    key={index}
    pressedLetters={pressedletters} 
    addLettertoArray={addLettertoArray} 
    letter={item.letter} 
    sound = {item.sound}
  />
          </>
        ))
      }  
       </div>
           {finishPage && (
  <div className="modalOverlay">
    <div className="modalContent">
      <h2>Жарайсың!🎉🎉🎉</h2>
      <h2>Сен 🌟🌟🌟🌟 жинадың!</h2>
      <button onClick={goToBack}>Қайта бастау</button>
    </div>
  </div>
)}

       <div className="btns">
  <div onClick={prevPage} className="btn">Артқа</div>
  <div onClick={nextPage} className="btn">Алға</div>
</div>
     <p className="page-info">📖 Бұл {pageIndex + 1}-бет. Барлығы {letterChunks.length} бет</p>
      </div>
    )


  }
  
export default AlphabetScreen

