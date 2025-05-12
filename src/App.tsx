import AlphabetScreen from './components/AlphabetScreen';
import './App.css'
import AlphabetGame from './pages/AlphabetGame';
import { Routes,Route } from 'react-router-dom';
import NumberScreen from './pages/NumberScreen';
import NumberPracticePage from './pages/NumberPracticePage';
import Home from './pages/Home';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/letters' element={<AlphabetScreen/>}></Route>
      <Route path='/letterGame' element={<AlphabetGame/>}></Route>
      <Route path='/numberScreen' element={<NumberScreen/>}></Route>
      <Route path='/numberPractice' element={<NumberPracticePage/>}></Route>
      <Route path='*' element={<h2>Page not found</h2>} />
    </Routes>
 
    </>
  )
      
}

export default App
