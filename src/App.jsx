import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NomesPage from './pages/NomesPage';
import NumerosPage from './pages/NumerosPage';
import './App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/nomes' element={ <NomesPage/> }></Route>
        <Route path='/numeros' element={ <NumerosPage/> }></Route>
      </Routes>
    </>
  )
}

export default App
