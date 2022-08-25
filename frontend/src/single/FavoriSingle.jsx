import React,{useContext} from 'react'
import { Button } from 'react-bootstrap'
import { Context } from '../App'
import '../styles/favoriSingle.css'
import toast from 'react-hot-toast';

function FavoriSingle({item}) {

  const context = useContext(Context)

  const handleClickRemove = () => {
      context.setFavoriItems(context.favoriItems.filter((product) => product.id !== item.id))
      toast.error("Favorilerden Çıkarıldı..")

  }

  const handleClickAdd = () => {
    const available = context.sepetim.find(product => product.id === item.id)
    if(available){
      context.setSepetim(context.sepetim.map(product => product.id === item.id ? {...product, count: product.count +1 } : product))
    }else{
      context.setSepetim([...context.sepetim,{...item}])
    } 
    toast.success("Sepete Eklendi..")

      
  }

  return (
    <div className='favori-single'>
      <img src={item.img}  alt="" />
        <div className="single-items">
            <ul>
                <li> {item.isim} </li>
                <li> {item.renk} </li>
                <li> {item.fiyat} TL. </li>
            </ul>
            <div className="buttons">
                <Button onClick={handleClickRemove} className='single-button' variant="outline-danger">Çıkart</Button>
                <Button onClick={handleClickAdd} className='single-button' variant="outline-success">Sepete Ekle</Button>
            </div>
        </div>
    </div>
  )
}

export default FavoriSingle