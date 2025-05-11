import React from 'react'
import error from '../assets/sounds/error.mp3'
import success from '../assets/sounds/success.mp3'
import tada from '../assets/sounds/tada.mp3'
const Numbercard = ({shuffledNumbers, itemNUm,itemIndex,setCurrentNumberIndex, currentNumberIndex,numbers}) => {
  const [status, setStatus] = React.useState('');
  const [showModal, setShowModal] = React.useState(false);

  const handleFinish = () => {
    setShowModal(true);
    const audio = new Audio(tada);
    audio.play();
  };
  
  const restartGame = () => {
    setCurrentNumberIndex(0);
    setShowModal(false);
  };


const handleClick = (item) => {
  const isCorrect = item === shuffledNumbers[currentNumberIndex].number;
  setStatus(isCorrect ? 'correct' : 'wrong');

  const audio = new Audio(isCorrect ? success : error);
  audio.play();

  setTimeout(() => {
    if (isCorrect) {
      // Проверка завершения игры ДО увеличения индекса
      if (currentNumberIndex === shuffledNumbers.length - 1) {
        setStatus('');
        handleFinish(); // вызывается функция показа модалки
        return;
      }
      setCurrentNumberIndex(prev => prev + 1);
    }
    setStatus('');
  }, 700);
};

  return (

 <>
    <div
    onClick={() => handleClick(itemNUm)}
    className={`nCard ${status === 'correct' ? 'correct' : ''} ${status === 'wrong' ? 'wrong' : ''}`}
  >
    {itemNUm}
  </div>
  {showModal && (
  <div className="modal-overlay">
<div className="modal">
  <div className="coin-animation" style={{ fontSize: '64px' }}>🏆🏆🏆</div>
  <p className="modal-text">Сен бәріне дұрыс жауап бердің!</p>
  <div className="modal-buttons">
<button onClick={restartGame} className="restart-btn">
  🔄 Қайта ойнайық!
</button>
  <button onClick={()=>setShowModal(false)} className="exit-btn">Шығу</button>
</div>
</div>

  </div>
)}

 </>
  
  )
}

export default Numbercard
