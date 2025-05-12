import '../styles/header.css'
import { useSound } from '../SoundText';
 
const Header = () => {
  const { isSoundOn, toggleSound } = useSound();
  return (
    <div>
      <header>
      <div className="logo">ABC Kids</div>
  <div className="controls">
    <button className="header-btn">🇰🇿 KZ</button>
    <button className="header-btn" onClick={toggleSound}>
          {isSoundOn ? '🔊' : '🔇'}
        </button>
    <button className="header-btn">🏠</button>
  </div>
      </header>
    </div>
  )
}

export default Header
