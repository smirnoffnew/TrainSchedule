import React, { Component, Fragment } from 'react';
import { RowSmall } from '../Row/RowSmall'

class TableSmall extends Component {
  componentDidMount = () => {
    const each = document.querySelectorAll(".rowSmall")
    const even = document.querySelectorAll(".rowSmall:nth-child(2n)")

    if (this.props.theme === 'dark') {
      each.forEach(elem => {
        elem.style.background = '#2f4858'
      })
      this.props.even && even.forEach(elem => {
        elem.style.background = '#5f788a'
      })
    }
    // dark each 2f4858
    // dark even 5f788a
  }

  render() {
    return (
      <Fragment>
        {this.props.rows.map((item, index) => {
          return <RowSmall
            key={index}
            connectNumber={item.connectNumber}
            destination={item.destination}
            departureTime={item.departureTime}
            departure={item.departure}

            placesColor={item.placesColor}
            places={item.places}
          />
        })}
      </Fragment>
    );
  }
}

export default TableSmall;
