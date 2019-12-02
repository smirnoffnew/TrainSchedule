import React from 'react'
import './DelayMenu.css';

export const DelayMenu = () => {
  return (
    <div className="delay-menu-wrapper" >

      <div className='delay-menu-text-wrapper'>
        <input type='text' />
        <input type='text' />
      </div>

      <div className='delay-menu-checkbox-wrapper'>
        <input type='checkbox' />
        <input type='checkbox' />
      </div>

      <button className='delay-menu-button'>button</button>

    </div>
  )
}
