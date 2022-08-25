import React,{useState, useEffect, useContext} from 'react'
import Sidebar from './Sidebar'
import Urunler from './Urunler'
import Context from '../App'
import '../styles/home.css'
function Home() {

  
  return (
    <div className='home'>
        <Sidebar ></Sidebar>
        <Urunler ></Urunler>
    </div>
  )
}

export default Home