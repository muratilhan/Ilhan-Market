import React,{useContext} from 'react'
import {Context} from '../App'
import SingleSepetim from '../single/SingleSepetim';
import SepetimSidebar from './SepetimSidebar';
import Single from '../single/Single';
import '../styles/sepetim.css'

function Sepetim() {



  const context = useContext(Context);

  return (
    <div className='sepetim'>
      <SepetimSidebar/>
      <div className="sepetim-items">
          { context.sepetim.map((item)=>{
            return (
              <SingleSepetim item={item}/>
            )
          })}
      </div>
      
    </div>
  )
}

export default Sepetim