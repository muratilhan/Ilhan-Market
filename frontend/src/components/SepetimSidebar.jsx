import React,{useContext} from 'react'
import {Button} from 'react-bootstrap'
import '../styles/sepetim.css'
import {Context} from '../App'
function SepetimSidebar() {

  const context = useContext(Context);

  

  return (
    <div className='sepetim-sidebar-container'>

          <div className="sepetim-sidebar-infos">
              <h5>Toplam Tutar: {context.toplamTutar} TL.</h5>
              
          </div>
          <div className="sepetim-sidebar-button-container">
             <Button disabled={true} className='sepetim-sidebar-button' variant="outline-success">
                <i style={{color:"green"}} className="fa-solid fa-arrow-down-long"></i>&nbsp;&nbsp; İLETİŞİME GEÇ &nbsp;&nbsp;<i style={{color:"green"}} class="fa-solid fa-arrow-down-long"></i>
              </Button>
             <ul className='sepetim-sidebar-ul'>
              <a style={{textDecoration:"none",color:"black"}} target="_blank" href="https://www.instagram.com/muratilhan.08/"><li className='sepetim-sidebar-li'> <i style={{fontWeight:"bold"}} class="fa-brands fa-instagram"></i><span className='contact-type'>muratilhan.08</span></li></a>
              <li className='sepetim-sidebar-li'> <i class="fa-solid fa-phone"></i><span className='contact-type'>536 610 99 08</span></li>
              <li className='sepetim-sidebar-li'> <i class="fa-solid fa-location-dot"></i><span className='contact-type'>İnegöl / Bursa</span></li>
             </ul>
          </div>
    </div>
  )
}

export default SepetimSidebar