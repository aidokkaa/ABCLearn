import { useState } from 'react'
import AlphabetScreen from './components/AlphabetScreen';
import Header from './components/Header';
import './App.css'
import AlphabetGame from './pages/AlphabetGame';
import { Routes,Route } from 'react-router-dom';
import NumberScreen from './pages/NumberScreen';
import NumberPracticePage from './pages/NumberPracticePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/letters' element={<AlphabetScreen/>}></Route>
      <Route path='/letterGame' element={<AlphabetGame/>}></Route>
      <Route path='/numberScreen' element={<NumberScreen/>}></Route>
      <Route path='/numberPractice' element={<NumberPracticePage/>}></Route>
    </Routes>
 
    </>
  )
      
}

export default App
