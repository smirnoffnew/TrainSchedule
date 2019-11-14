import React, { useState, useEffect } from 'react'
import logo from '../../assets/Logo.png';
import './headTable.css';

export const HeadTable = () => {
  const [time, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date())
  }

  useEffect(() => {
    let id = setInterval(() => {
      tick();
    }, 1000);
    return () => clearInterval(id);
  });

  return (
    <section className="head-table" >
      <div className='head-logo'>
        <img src={logo} alt="Logo" />
      </div>
      <div className="head-time">
        {time.toLocaleTimeString()}
      </div>
    </section>
  )
}
