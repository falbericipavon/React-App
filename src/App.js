import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar/Nav';
import Home from './components/Pages/Home';
import Productos from './components/Pages/Productos';
import Carrito from './components/Pages/Carrito';
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/category/:catId" element={<ItemListContainer />} />
          <Route path="/producto/:prodId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
