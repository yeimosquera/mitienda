import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import bootstrap from 'bootstrap';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Producto from './pages/Productos/Producto';

function App() {
  return (
    <div className="App">     
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/categorias' element={<Home/>}></Route> 
          <Route path='/catalogo/:id' element={<Producto/>}></Route>         
        </Routes> 

      </BrowserRouter>  

    </div>
  );
}

export default App;
