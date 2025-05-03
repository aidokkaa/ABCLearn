import { useState } from 'react'
import AlphabetScreen from './components/AlphabetScreen';
import Header from './components/Header';
import './App.css'
import AlphabetGame from './pages/AlphabetGame';
import { Routes,Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/letters' element={<AlphabetScreen/>}></Route>
      <Route path='/letterGame' element={<AlphabetGame/>}></Route>
    </Routes>
 
    </>
  )
      
}

export default App
