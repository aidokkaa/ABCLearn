import React from 'react';
import { numberItem } from '../pages/NumberPracticePage';
import error from '../assets/sounds/error.mp3';
import success from '../assets/sounds/success.mp3';
import tada from '../assets/sounds/tada.mp3';
import { useSound } from '../SoundText';

interface NumberCardProps {
  shuffledNumbers: numberItem[];
  itemNUm: number;
  setCurrentNumberIndex: React.Dispatch<React.SetStateAction<number>>;
  currentNumberIndex: number;
  numbers: numberItem[];
}

const Numbercard: React.FC<NumberCardProps> = ({
  shuffledNumbers,
  itemNUm,
  setCurrentNumberIndex,
  currentNumberIndex,
}) => {
  const [status, setStatus] = React.useState<string>('');
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const { isSoundOn } = useSound();

  const handleFinish = (): void => {
    setShowModal(true);
    if (!isSoundOn) return;
    const audio = new Audio(tada);
    audio.play();
  };

  const restartGame = (): void => {
    setCurrentNumberIndex(0);
    setShowModal(false);
  };

  const handleClick = (item: number): void => {
    const isCorrect = item === shuffledNumbers[currentNumberIndex].number;
    setStatus(isCorrect ? 'correct' : 'wrong');

    const audio = new Audio(isCorrect ? success : error);
    if (isSoundOn) {
      audio.play();
    }

    setTimeout(() => {
      if (isCorrect) {
        if (currentNumberIndex === shuffledNumbers.length - 1) {
          setStatus('');
          handleFinish();
          return;
        }
        setCurrentNumberIndex((prev) => prev + 1);
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
              <button onClick={() => setShowModal(false)} className="exit-btn">
                Шығу
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Numbercard;
