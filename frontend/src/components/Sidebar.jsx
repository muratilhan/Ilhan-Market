import React,{useState, useContext} from 'react'
import {Context} from '../App'
import '../styles/sidebar.css'
import {Link} from 'react-router-dom'
function Sidebar() {

 
  const context = useContext(Context)
  
  return (
    <div className='sidebar-container'>
      
        <div className="kategoriler">
            <h4><b>Kategoriler</b>:</h4>
            <ul className='items'>
                <li onClick={()=>context.setKategori("")}> <b>Hepsi</b> </li>
                <li onClick={()=>context.setKategori("bilgisayar")}>Bilgisayar</li>
                <li onClick={()=>context.setKategori("telefon")}>Telefon</li>
                <li onClick={()=>context.setKategori("tablet")}>Tablet</li>
                <li onClick={()=>context.setKategori("saat")}>Saat</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar