import React, { Component, Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import { RowSmall } from '../Row/RowSmall'
import './Table.css'

class TableSmall extends Component {
  componentDidUpdate = () => {
    const each = document.querySelectorAll(".rowSmall")
    const even = document.querySelectorAll(".rowSmall:nth-child(2n)")

    const eachPlacesSmall = document.querySelectorAll(".places-small")
    const eachFontSizeRem = document.querySelectorAll(".font-size-rem")

    

    if (this.props.theme === 'dark') {
      each.forEach(elem => {
        elem.style.background = '#2f4858'
      })
      this.props.even && even.forEach(elem => {
        elem.style.background = '#5f788a'
      })
    }

    if (this.props.endPaginationRows === 2) {
      eachPlacesSmall.forEach(elem => {
        elem.style.fontSize = '70px'
      })
      eachFontSizeRem.forEach(elem => {
        elem.style.fontSize = '6rem'
      })
    }

    if (this.props.endPaginationRows === 3) {
      eachPlacesSmall.forEach(elem => {
        elem.style.fontSize = '50px'
      })
      eachFontSizeRem.forEach(elem => {
        elem.style.fontSize = '4rem'
      })
    }

    // dark each 2f4858
    // dark even 5f788a
  }

  render() {
    return (
      <Fragment>
        <div className='rows-wrapper-small'>
          <div className='rows-constainer'>
            {this.props.rows && this.props.rows.map((item, index) => {
              return <RowSmall
                key={index}

                connectNumber={item.connectNumber}
                destination={item.destination}
                departureTime={item.departureTime}
                departure={item.departure}

                placesColor={item.freeSeatsCount === 0 ? 'red' : 'green'}
                places={item.freeSeatsCount === 0 ?
                  this.props.t('display.deartures.occupiedPlaces')
                  :
                  this.props.t('display.deartures.freePlaces')
                }
              />
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withTranslation()(TableSmall);
