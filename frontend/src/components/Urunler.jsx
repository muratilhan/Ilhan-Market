import React,{useState, useEffect, useContext} from 'react'
import '../styles/urunler.css'
import {Context} from '../App'
import Data from '../Data.json';
import Single from '../single/Single';

function Urunler() {

  const context = useContext(Context)

  const [items, setItems] = useState(Data)
  const [filteredItems, setFilteredItems] = useState(items);
  
  useEffect(()=>{
    if(context.kategori){
      setFilteredItems(items.filter((item) => ( item.kategori === context.kategori || item.kategori.toLowerCase().startsWith(context.kategori.toLowerCase())))) 
    }else{
      setFilteredItems([...items])
    }

  },[context])
  
  return (
    <div className='urunler-container'>
      { filteredItems.map((item) => {
        return(
            <Single item={item} />
        )
      })}
    </div>
  )
}

export default Urunler