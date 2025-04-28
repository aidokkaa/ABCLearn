import { useState } from 'react'
import AlphabetScreen from './components/AlphabetScreen';
import Header from './components/Header';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
     <AlphabetScreen></AlphabetScreen>
    </>
  )
      
}

export default App
