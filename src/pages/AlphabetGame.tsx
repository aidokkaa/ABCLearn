import React from 'react'
import '../styles/letterGame.css'
import intro from '../assets/sounds/intro.mp3';
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



const AlphabetGame = () => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  
  const letterSounds = [
    { audio: new Audio(a), letter: 'A' },
    { audio: new Audio(b), letter: 'B' },
    { audio: new Audio(c), letter: 'C' },
    { audio: new Audio(d), letter: 'D' },
    { audio: new Audio(e), letter: 'E' },
    { audio: new Audio(f), letter: 'F' },
    { audio: new Audio(g), letter: 'G' },
    { audio: new Audio(h), letter: 'H' },
    { audio: new Audio(i), letter: 'I' },
    { audio: new Audio(j), letter: 'J' },
    { audio: new Audio(k), letter: 'K' },
    { audio: new Audio(l), letter: 'L' },
    { audio: new Audio(m), letter: 'M' },
    { audio: new Audio(n), letter: 'N' },
    { audio: new Audio(o), letter: 'O' },
    { audio: new Audio(p), letter: 'P' },
    { audio: new Audio(q), letter: 'Q' },
    { audio: new Audio(r), letter: 'R' },
    { audio: new Audio(s), letter: 'S' },
    { audio: new Audio(t), letter: 'T' },
    { audio: new Audio(u), letter: 'U' },
    { audio: new Audio(v), letter: 'V' },
    { audio: new Audio(w), letter: 'W' },
    { audio: new Audio(x), letter: 'X' },
    { audio: new Audio(y), letter: 'Y' },
    { audio: new Audio(z), letter: 'Z' },
  ];
  
  const letterGroups = [
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  ];
  const totalRounds = letterGroups.length;
 const ballColors = ['#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D', '#FF6EC7', '#A66DD4'];
  
  
  const [currentLetterIndex,setCurrentLetterIndex]=React.useState(0);
  const [currentLetters,setCurrentLetters]=React.useState();
  const [randomLetters,setRandomLetters]=React.useState([])
  const [showLetters,setShowLetters]=React.useState(false);
  const [round,setRound]=React.useState(0)
  const [showRoundComplete,setshowRoundComplete]=React.useState(false)
  const [randomLettersHistory,setRandomLettersHistory]=React.useState([])
  const [feedback, setFeedback] = React.useState(null); // 'correct' | 'wrong' | null

  
  const playIntro = () => {
    const audio = new Audio(intro);
    audio.play();
  };
  const listenLetter = ()=>{
   letterSounds[currentLetterIndex].audio.play()
  }
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  
  const startNextLetter = ()=>{
    const heardLetter = letterSounds[currentLetterIndex].letter;
    const randomSet = new Set();
    randomSet.add(heardLetter);
    while(randomSet.size<3){
      const randomLetter = letterGroups[round][Math.floor(Math.random() * letterGroups[round].length)];
      randomSet.add(randomLetter)
    }
    const arrayOfRandLetters = Array.from(randomSet);
    setRandomLetters(shuffleArray(arrayOfRandLetters))
    setRandomLettersHistory(prev => [...prev, arrayOfRandLetters]); 
   setShowLetters(true)
  }

const chooseLetter = (item) => {
  const isCorrect = item === letterSounds[currentLetterIndex].letter;

  if (isCorrect) {
     setFeedback('correct');
     setTimeout(() => setFeedback(null), 2000);
    setCurrentLetterIndex(prevIndex => prevIndex + 1);
    setShowLetters(false)
    const totalLettersPassed = letterGroups
      .slice(0, round + 1)
      .reduce((sum, group) => sum + group.length, 0);

    const isLastLetterInRound = currentLetterIndex === totalLettersPassed - 1;

    if (isLastLetterInRound) {
      setshowRoundComplete(true);

      setShowLetters(false);
      setRound(prev => prev + 1);
    }

    
  } else {
     setFeedback('wrong');
  setTimeout(() => setFeedback(null), 2000);
  }
};

  const multiFunction=()=>{
    setshowRoundComplete(false)
    listenLetter()
    startNextLetter(); 
  }
  

  return (
    <div className='letterGame-cont'>
       <Link className='link' to='/home'><div>🏠</div></Link>
      <h1 className="task-title">👂 Құлақ түр, әріпті тыңда да, дұрысын таңда!</h1>

      <div className="game-buttons">
        <button className="start-btn" onClick={playIntro}>🔊 Тапсырманы тыңдау</button>
        <button className="start-btn" onClick={() => {
  if (currentLetterIndex === 0) {
    listenLetter();
  } else {
    listenLetter()
    startNextLetter(); 
  }
}}>
  {currentLetterIndex === 0 ? '🔊 Әріпті тыңдау' : 'Келесі әріп'}
</button>

        {
          currentLetterIndex===0 && (
            <button className="start-btn" onClick={startNextLetter}>🚀 Бастау</button>
          )
        }
     {currentLetterIndex>0 &&
      <button className='start-btn' onClick={()=>letterSounds[currentLetterIndex].audio.play()}>Aripti tindau</button>}
      </div>
      {feedback === 'correct' && (
  <div className="feedback correct">✅ Дұрыс!</div>
)}
{feedback === 'wrong' && (
  <div className="feedback wrong">❌ Қате! Қайтадан көр!</div>
)}
{showLetters && (
  <div className="letter-grid">
    {randomLetters.map((item, index) => {
      const color = ballColors[index % ballColors.length];
      return (
        <div
          key={index}
          className="letter-ball"
          style={{ backgroundColor: color }}
          onClick={() => chooseLetter(item)}
        >
          {item}
        </div>
      );
    })}
  </div>
)}

{
  currentLetterIndex>0 && (
    <button className='start-btn' onClick={() => {
      setCurrentLetterIndex(prevIndex => {
        if (prevIndex > 0) {
          const newIndex = prevIndex - 1;
          setRandomLetters(randomLettersHistory[newIndex]); 
          letterSounds[newIndex].audio.play();    
          setShowLetters(true);    
          return newIndex;
        }
        return prevIndex;
      });
    }}>Артқа</button>
    
  )
}

{/* {
  showRoundComplete ? (
    <div>
      
      {
        round < totalRounds ? (
          <button onClick={multiFunction}><h2>🎉 Раунд {round } завершен!</h2>🚀 Жаңа раундты бастау</button>
        ) : (
          <button onClick={() => {
            setRound(0);
            setCurrentLetterIndex(0);
            setRandomLetters([]);
            setRandomLettersHistory([]);
            setShowLetters(false);
            setshowRoundComplete(false);
          }}>
            🔁 Раундтар аяқталды! Қайта бастау
          </button>
        )
      }
    </div>
  ) : null
} */}

{
  showRoundComplete && (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      color: 'white'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        {round < totalRounds ? `🎉 Раунд ${round} аяқталды!` : '🥳 Барлық раундтар аяқталды!'}
      </h2>
      <p style={{ marginBottom: '2rem' }}>
        {round < totalRounds ? 'Келесі раундқа көшейік!' : 'Бастапқыдан қайта бастайық па?'}
      </p>

      <div style={{ display: 'flex', gap: '1rem' }}>
        {
          round < totalRounds ? (
            <button
              onClick={multiFunction}
              style={{
                padding: '1rem 2rem',
                fontSize: '1.2rem',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              🚀 Жаңа раундты бастау
            </button>
          ) : (
            <button
              onClick={() => {
                setRound(0);
                setCurrentLetterIndex(0);
                setRandomLetters([]);
                setRandomLettersHistory([]);
                setShowLetters(false);
                setshowRoundComplete(false);
              }}
              style={{
                padding: '1rem 2rem',
                fontSize: '1.2rem',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              🔁 Қайта бастау
            </button>
          )
        }
        <button
  onClick={() => {
    setRound(0);
    setCurrentLetterIndex(0);
    setRandomLetters([]);
    setRandomLettersHistory([]);
    setShowLetters(false);
    setshowRoundComplete(false); 
  }}
  style={{
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    backgroundColor: '#777',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  }}
>
  ❌ Шығу
</button>

      </div>
    </div>
  )
}


    </div>
  )
}

export default AlphabetGame

