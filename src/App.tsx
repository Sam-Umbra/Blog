import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.tsx';
import Animes from './components/Animes.tsx';
import Astronomia from './components/Astronomia.tsx';
import Jogos from './components/Jogos.tsx';
import Literatura from './components/Literatura.tsx';
import Musica from './components/Musica.tsx';
import Contato from './components/Contato.tsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Animes' element={<Animes/>}/>
          <Route path='/Astronomia' element={<Astronomia/>}/>
          <Route path='/Jogos' element={<Jogos/>}/>
          <Route path='/Literatura' element={<Literatura/>}/>
          <Route path='/Musica' element={<Musica/>}/>
          <Route path='/Contato' element={<Contato/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;