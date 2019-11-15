import React, { Component, Fragment } from 'react';
import trainIcon from '../../assets/Vector.png';
import './RowSmall.css';

class RowSmall extends Component {
  render() {
    const {
      connectNumber, destination, departureTime, departure, places, placesColor
    } = this.props

    return (
      <section
        className="rowSmall"
      >
        <Fragment>
          <div className="rowItemSmall" style={{ width: '100%' }}>
            <div className="row-item-textSmall">{destination}</div>
            <div className="row-item-textSmall">{departureTime}</div>
          </div>

          <div className="rowItemSmall" style={{ width: '100%' }}>
            <div className="row-item-textSmall">{departure}</div>
          </div>

          <div className="rowItemSmall" style={{ width: '100%' }}>
            <div style={{ display: 'inherit', alignItems: 'center' }}>
              <img src={trainIcon} alt="TrainLogo" className="train-iconSmall" />
              <div className="row-item-textSmall">{connectNumber}</div>            
            </div>
            <div
              className={
                placesColor === 'red' ? "row-item-textSmall redSmall" : "row-item-textSmall greenSmall"
              }
            >
              {places}
            </div>
          </div>
        </Fragment>
      </section>
    )
  }
}

export { RowSmall }