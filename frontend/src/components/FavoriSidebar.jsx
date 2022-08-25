import {React,useContext,useState} from 'react'
import '../styles/favoriSidebar.css'
import {Button} from 'react-bootstrap'
import Data from '../Data.json'
import {Context} from '../App'
import toast from 'react-hot-toast';

function FavoriSidebar() {

    const [veri, setVeri] = useState(Data[4])
    const context = useContext(Context)

    const addSepet = () => {

      const available = context.sepetim.find(product => product.id === veri.id)

      if(available){
        context.setSepetim(context.sepetim.map(product => product.id === veri.id ? {...product, count: product.count +1 } : product))
      }else{
        context.setSepetim([...context.sepetim,{...veri}])
      } 
      toast.success("Sepete Eklendi..")


    }
    const addFavori = () => {
      const available = context.favoriItems.find(product => product.id === veri.id)
      if(!available){
      context.setFavoriItems([...context.favoriItems,{...veri}])
      toast.success("Favorilere Eklendi..")

    }

    }

  return (
    <div className='favori-sidebar'>
        <h3>En Çok Beğenilenler!</h3>
        <img src={veri.img} alt="none" />
        <li className='favori-sidebar-infos'> {veri.isim} </li>
        <li className='favori-sidebar-infos'> {veri.renk} </li>
        <div className="favori-sidebar-buttons">
            <Button onClick={addFavori} className='favori-sidebar-button' variant="outline-danger">favorilere ekle</Button>
            <Button onClick={addSepet} className='favori-sidebar-button' variant="outline-success" >Sepete Ekle</Button>
        </div>
        
    </div>
  )
}

export default FavoriSidebar