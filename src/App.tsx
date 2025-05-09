import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home.tsx';
import Animes from './components/animes/Animes.tsx';
import Astronomia from './components/astronomia/Astronomia.tsx';
import Jogos from './components/jogos/Jogos.tsx';
import Literatura from './components/literatura/Literatura.tsx';
import Musica from './components/musica/Musica.tsx';
import Contato from './components/contato/Contato.tsx';

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