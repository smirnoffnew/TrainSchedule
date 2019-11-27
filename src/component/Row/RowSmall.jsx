import React, { Component, Fragment } from 'react';
import trainIcon from '../../assets/Vector.png';
import './RowSmall.css';
import LiveLineRowSmall from '../liveLineRowSmall/liveLineRowSmall';

class RowSmall extends Component {
  render() {
    const {
      connectNumber,
      destination,
      departureTime,
      departure,
      placesColor,
      places,
    } = this.props

    return (
      <section
        className="rowSmall"
      >
        <Fragment>
          <div className="rowItemSmall" style={{ width: '100%' }}>
            <div
              className="row-item-textSmall font-size-rem"
              style={{ maxWidth: '75%' }}
            >
              {destination}
            </div>
            <div className="row-item-textSmall font-size-rem">{departureTime}</div>
          </div>

          <div className="rowItemSmall" style={{ width: '100%' }}>
            <div className="row-item-textSmall">
              <LiveLineRowSmall text={departure} />
            </div>
          </div>

          <div className="rowItemSmall" style={{ width: '100%', marginTop: 70 }}>
            <div style={{ display: 'inherit', alignItems: 'center' }}>
              <img src={trainIcon} alt="TrainLogo" className="train-iconSmall" />
              <div className="row-item-textSmall" style={{ paddingLeft: 7 }}>{connectNumber}</div>
            </div>
          </div>

          <div
            className='places-small'
            style={{ background: placesColor === 'red' ? "red" : "green" }}
          >
            {places}
          </div>
        </Fragment>
      </section>
    )
  }
}

export { RowSmall }