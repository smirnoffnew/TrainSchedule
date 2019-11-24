import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Row from '../Row/Row'
import './Table.css'

class Table extends Component {
  componentDidUpdate = () => {
    const each = document.querySelectorAll(".row")
    const eachText = document.querySelectorAll(".row-item-text")
    const even = document.querySelectorAll(".row:nth-child(2n)")

    const firstTree = document.querySelectorAll(".row:nth-child(-n+3)")
    const firstTreeText = document.querySelectorAll(".row:nth-child(-n+3) .row-item-text")
    const third = document.querySelectorAll(".row:nth-child(3)")

    const eachAfterThird = document.querySelectorAll(".row:nth-child(n+4)")
    const oddAfterThird = document.querySelectorAll(".row:nth-child(n+4):nth-child(odd)")


    if (this.props.endPaginationRows === 7) {
      firstTree.forEach(elem => {
        elem.style.height = '21.5%'
      })
      firstTreeText.forEach(elem => {
        elem.style.fontSize = '42px'
      })
      third.forEach(elem => {
        elem.style.borderBottom = '6px solid #c3ccd2'
      })
    }

    if (this.props.theme === 'dark') {
      each.forEach(elem => {
        elem.style.background = '#2f4858'
      })
      this.props.even && even.forEach(elem => {
        elem.style.background = '#5f788a'
      })

      if (this.props.endPaginationRows === 7) {
        eachAfterThird.forEach(elem => {
          elem.style.background = '#2f4858'
        })

        oddAfterThird.forEach(elem => {
          elem.style.background = '#5f788a'
        })
      }
    }

    if (this.props.theme === 'light') {
      eachText.forEach(elem => {
        elem.style.color = '#1c2d4d'
      })
      each.forEach(elem => {
        elem.style.background = '#ffffff'
      })
      this.props.even && even.forEach(elem => {
        elem.style.background = '#e5e5e5'
      })
    }



    // light each ffffff
    // light even e5e5e5

    // dark each 2f4858
    // dark even 5f788a
  }

  render() {
    return (
      <>
        {
          this.props.collumns === 7 ?
            <>
              <div className="head-group">
                <p style={{ width: '10%' }}>{this.props.t('display.deartures.lineNumber')}</p>
                <p style={{ width: '30%' }}>{this.props.t('display.deartures.finalStation')}</p>
                <p style={{ width: '10%' }}>{this.props.t('display.deartures.departure')}</p>
                <p style={{ width: '20%' }}>{this.props.t('display.deartures.connectionStations')}</p>
                <p style={{ width: '10%' }}>{this.props.t('display.deartures.platform')}</p>
                <p style={{ width: '10%' }}>{this.props.t('display.deartures.delay')}</p>
                <p style={{ width: '10%' }}></p>
              </div>
              <div className='rows-wrapper'>
                <div className='rows-constainer'>
                  {this.props.rows && this.props.rows.map((item, index) => {
                    return <Row
                      key={index}
                      theme={this.props.theme}

                      stationsTypes={item.stationsTypes}
                      connectNumber={item.connectNumber}
                      destination={item.destination}
                      departureTime={item.departureTime}
                      departure={item.departure}
                      platform={item.platform}

                      timeColor={item.delay === 0 ? 'green' : 'red'}
                      time={item.delay + ' ' + this.props.t('display.deartures.minutes')}

                      

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
            </>
            :
            <>
              <div className="head-group">
                <p style={{ width: '10%' }}>{this.props.t('display.deartures.lineNumber')}</p>
                <p style={{ width: '40%' }}>{this.props.t('display.deartures.finalStation')}</p>
                <p style={{ width: '10%' }}>{this.props.t('display.deartures.departure')}</p>
                <p style={{ width: '20%' }}>{this.props.t('display.deartures.connectionStations')}</p>
                <p style={{ width: '10%' }}>{this.props.t('display.deartures.platform')}</p>
                <p style={{ width: '10%' }}>{this.props.t('display.deartures.delay')}</p>
              </div>
              <div className='rows-wrapper'>
                <div className='rows-constainer'>
                  {this.props.rows && this.props.rows.map((item, index) => {
                    return <Row
                      key={index}
                      theme={this.props.theme}

                      stationsTypes={item.stationsTypes}
                      connectNumber={item.connectNumber}
                      destination={item.destination}
                      departureTime={item.departureTime}
                      departure={item.departure}
                      platform={item.platform}

                      timeColor={item.delay === 0 ? 'green' : 'red'}
                      time={item.delay + ' ' + this.props.t('display.deartures.minutes')}
                    />
                  })}
                </div>
              </div>
            </>
        }
      </>
    );
  }
}

export default withTranslation()(Table);
