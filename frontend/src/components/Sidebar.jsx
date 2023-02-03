import React,{useState, useContext} from 'react'
import { Dropdown } from 'react-bootstrap'
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
            <Dropdown className='sidebar-dropdown'>
              <Dropdown.Toggle variant="outline-warning" id="dropdown-basic">
                Kategoriler
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={()=>context.setKategori("")} >Hepsi</Dropdown.Item>
                <Dropdown.Item onClick={()=>context.setKategori("bilgisayar")}>Bilgisayar</Dropdown.Item>
                <Dropdown.Item onClick={()=>context.setKategori("telefon")}>Telefon</Dropdown.Item>
                <Dropdown.Item onClick={()=>context.setKategori("tablet")}>Tablet</Dropdown.Item>
                <Dropdown.Item onClick={()=>context.setKategori("saat")}>Saat</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
        
    </div>
  )
}

export default Sidebar