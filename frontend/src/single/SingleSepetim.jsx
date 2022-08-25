import React,{useContext} from 'react'
import {Button} from 'react-bootstrap'
import {Context} from '../App'
import '../styles/sepetim.css'
import toast from 'react-hot-toast';

function SingleSepetim({item}) {

  const context = useContext(Context)

  const handleClick = () => {
      context.setSepetim(context.sepetim.filter((product) => product.id !== item.id))
      toast.error("Ürün Çıkarıldı..")

  }
  const handleClickIncrease = () => {
      context.setSepetim(context.sepetim.map(product => product.id === item.id ? {...product, count: product.count +1 } : product))
      toast.success("Adet 1 arttırıldı..")

  }
  const handleClickDecrease = () => {
    const getItem = context.sepetim.find(product => product.id === item.id)
    if(getItem.count > 1) {
      context.setSepetim(context.sepetim.map(product => product.id === item.id ? {...product, count: product.count -1 } : product))
      toast.success('Adet 1 azaltıldı..', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: "grey",
          secondary: '#FFFAEE',
        },
      });

    }
  }
  return (
    <div className='single-sepetim'>
        
        <img src={item.img} alt="none" />

        <div className="single-sepetim-infos">
          <li> {item.isim} </li>
          <li> {item.renk} </li>
          <li> {item.fiyat} TL. </li>
          <li> Adet Sayısı: <span style={{color:"red"}}><b>{item.count}</b></span> </li>
          <div className='single-sepetim-buttons'>
            <Button onClick={handleClickIncrease} className='single-sepetim-button' variant="outline-success">( + )</Button>
            <Button onClick={handleClickDecrease} className='single-sepetim-button' variant="outline-warning">( - )</Button>
            <Button onClick={handleClick} className='single-sepetim-button' variant="outline-danger"> Çıkart</Button>
          </div>
          
        </div>
    </div>
  )
}

export default SingleSepetim