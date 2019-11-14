import React, { Component } from 'react'
import trainIcon from '../../assets/Vector.png';
import './Row.css';

class Row extends Component {
  render() {
    const {
      connectNumber, destination, departureTime, departure, platform, timeColor, time, places, placesColor
    } = this.props

    return (
      <section
        className="row"
      >

        {
          places ?
            <>
              <div className="rowItem" style={{ width: '10%' }}>
                <img src={trainIcon} alt="TrainLogo" className="train-icon" />
                <div className="row-item-text">{connectNumber}</div>
              </div>

              <div className="rowItem" style={{ width: '30%' }}>
                <div className="row-item-text">{destination}</div>
              </div>

              <div className="rowItem" style={{ width: '10%' }}>
                <div className="row-item-text">{departureTime}</div>
              </div>

              <div className="rowItem" style={{ width: '20%' }}>
                <div className="row-item-text">{departure}</div>
              </div>

              <div className="rowItem" style={{ width: '10%' }}>
                <div className="row-item-text">{platform}</div>
              </div>

              <div className="rowItem" style={{ width: '10%' }}>
                <div
                  className={
                    timeColor === 'red' ? "row-item-text red" : "row-item-text green"
                  }
                >
                  {time}
                </div>
              </div>

              <div className="rowItem" style={{ width: '10%' }}>
                <div
                  className={
                    placesColor === 'red' ? "row-item-text red" : "row-item-text green"
                  }
                >
                  {places}
                </div>
              </div>
            </>
            :
            <>
              <div className="rowItem" style={{ width: '10%' }}>
                <img src={trainIcon} alt="TrainLogo" className="train-icon" />
                <div className="row-item-text">{connectNumber}</div>
              </div>

              <div className="rowItem" style={{ width: '40%' }}>
                <div className="row-item-text">{destination}</div>
              </div>

              <div className="rowItem" style={{ width: '10%' }}>
                <div className="row-item-text">{departureTime}</div>
              </div>

              <div className="rowItem" style={{ width: '20%' }}>
                <div className="row-item-text">{departure}</div>
              </div>

              <div className="rowItem" style={{ width: '10%' }}>
                <div className="row-item-text">{platform}</div>
              </div>

              <div className="rowItem" style={{ width: '10%' }}>
                <div
                  className={
                    timeColor === 'red' ? "row-item-text red" : "row-item-text green"
                  }
                >
                  {time}
                </div>
              </div>

            </>
        }

      </section>
    )
  }
}

export { Row }