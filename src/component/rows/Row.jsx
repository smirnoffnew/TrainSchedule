import React from 'react'

import './row.css';
import trainIcon from '../../assets/Vector.png';

const Row = props => {
  return (
    <section className="row" >

      <div className="rowItem" style={{ width: '10%' }}>
        <img src={trainIcon} alt="TrainLogo" className="train-icon" />
        <div className="row-item-text">{props.connectNumber}</div>
      </div>

      <div className="rowItem" style={{ width: '40%' }}>
        <div className="row-item-text">{props.destination}</div>
      </div>

      <div className="rowItem" style={{ width: '10%' }}>
        <div className="row-item-text">{props.departure}</div>
      </div>

      <div className="rowItem" style={{ width: '20%' }}>
        <div className="row-item-text">{props.through}</div>
      </div>

      <div className="rowItem" style={{ width: '10%' }}>
        <div className="row-item-text">{props.platform}</div>
      </div>

      <div className="rowItem" style={{ width: '10%' }}>

        <div
          className={
            (props.time === '25 min' && "row-item-text red") ||
            (props.time === '0 min' && "row-item-text green") ||
            'row-item-text'
          }
        >
          {props.time}
        </div>
      </div>

    </section>
  )
}

export { Row }