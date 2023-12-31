import React, { useContext } from 'react'
import imen from '../assets/united-kingdom.svg'
import imfr from '../assets/france.svg'
import imes from '../assets/spain.svg'
import {Langc} from '../context/Langcontext'
export default function Cicons() {
    const {setlang}=useContext(Langc)
  return (
    <div className='m-5'>
      <img  onClick={()=>setlang('EN')} src={imen} width='50' height='50' alt="" srcset="" />
      <img onClick={()=>setlang('FR')} src={imfr} width='50' height='50' alt="" srcset="" />
      <img onClick={()=>setlang('ES')} src={imes} width='50' height='50' alt="" srcset="" />
    </div>
  )
}