import React,{useContext} from 'react'
import {Context} from '../App'
import FavoriSidebar from './FavoriSidebar';
import { Button } from 'react-bootstrap';
import FavoriSingle from '../single/FavoriSingle'
import '../styles/favoriler.css'
function Favoriler() {

  const context = useContext(Context);

  return (
    <div className='favoriler'>

        <div className="favori-items">
          
            {context.favoriItems && context.favoriItems.map((item) => {
              return(
                  <FavoriSingle item={item} />
              )
            }) }
            
        </div>
        
        
        <FavoriSidebar/>  
    </div>
  )
}

export default Favoriler