import React,{useContext, useState, useEffect} from 'react'
import '../styles/single.css'
import {Button} from 'react-bootstrap'
import {Context} from '../App'
import toast from 'react-hot-toast';


function Single({item}) {

  const context = useContext(Context)
  
  const handleClickedFavori = () => {
    const available = context.favoriItems.find(product => product.id === item.id)
    if(!available){
      context.setFavoriItems([...context.favoriItems,{...item}])
      toast.success("Favorilere Eklendi")
    }

  }

  const handleClickedSepetim = () => {

    const available = context.sepetim.find(product => product.id === item.id)
    if(available){
      context.setSepetim(context.sepetim.map(product => product.id === item.id ? {...product, count: product.count +1 } : product))
      toast.success("Sepete Eklendi")

    }else{
      context.setSepetim([...context.sepetim,{...item}])
      toast.success("Sepete Eklendi")

    } 
  }
  
  return (
    <div className='single-container'>
        <img src={item.img} alt="" />
        <div className="single-items">
            <ul>
                <li> {item.isim} </li>
                <li> {item.renk} </li>
                <li> {item.fiyat} TL. </li>

            </ul>
            <div className="buttons">
                <Button onClick={handleClickedFavori} className='single-button' variant="outline-danger">Favoriler</Button>
                <Button onClick={handleClickedSepetim} className='single-button' variant="outline-success">sepete ekle</Button>
            </div>
        </div>
    </div>
  )
}
//<i onClick={handleClickedFavori} className="fa-solid fa-heart icon single-button "></i>
export default Single