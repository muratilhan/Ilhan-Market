import './App.css';
import { useState, createContext, useEffect } from 'react';
import Header from './components/Header'
import {Toaster} from 'react-hot-toast'
import './bootstrap.min.css'
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Urunler from './components/Urunler';
import Favoriler from './components/Favoriler'
import Sepetim from './components/Sepetim'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


export const Context = createContext();


function App() {
  const [kategori, setKategori] = useState("");
  const [favoriItems, setFavoriItems] = useState([]);
  const [sepetim, setSepetim] = useState([]);
  const [toplamTutar, setToplamTutar] = useState()

  useEffect(()=>{
    setToplamTutar(sepetim.reduce((toplam, item) => 
    (toplam = toplam + item.fiyat*item.count)
    ,0).toFixed(0))

  },[sepetim])


  return (
    <div className="App">

      <BrowserRouter>

          <Context.Provider value={{kategori, setKategori, favoriItems, setFavoriItems, sepetim, setSepetim, toplamTutar}}>

          <Header></Header>
          

              <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/favoriler" element={<Favoriler/>} />
                <Route path="/sepetim" element={<Sepetim/>} />
                <Route path="/sepetim" element={<Sepetim/>} />
              </Routes>
              

          </Context.Provider>
          <Toaster
                position="top-center"
                toastOptions={{
                  duration:2800,
              }}/>

      </BrowserRouter>
        
    </div>
  );
}

export default App;
