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
             <Button className='sepetim-sidebar-button' variant="outline-success">Alışverişi Tamamla</Button>
          </div>
    </div>
  )
}

export default SepetimSidebar