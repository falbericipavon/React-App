import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar/Nav';
import Home from './components/Pages/Home';
import Productos from './components/Pages/Productos';
import Carrito from './components/Pages/Carrito';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
