import React, { Component } from 'react';
import { Row } from '../Row/Row'
import './Table.css'

class Table extends Component {
  componentDidMount = () => {
    const each = document.querySelectorAll(".row")
    const eachText = document.querySelectorAll(".row-item-text")
    const even = document.querySelectorAll(".row:nth-child(2n)")

    if (this.props.theme === 'dark') {
      each.forEach(elem => {
        elem.style.background = '#2f4858'
      })
      this.props.even && even.forEach(elem => {
        elem.style.background = '#5f788a'
      })
    }
    else {
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
                <p style={{ width: '10%' }}>Zpoždění</p>
                <p style={{ width: '30%' }}>Nástupiště</p>
                <p style={{ width: '10%' }}>Přes</p>
                <p style={{ width: '20%' }}>Odjezd</p>
                <p style={{ width: '10%' }}>Cílová stanice</p>
                <p style={{ width: '10%' }}>Číslo spoje</p>
                <p style={{ width: '10%' }}></p>
              </div>

              {this.props.rows.map((item, index) => {
                return <Row
                  key={index}
                  stationsTypes={item.stationsTypes}
                  connectNumber={item.connectNumber}
                  destination={item.destination}
                  departureTime={item.departureTime}
                  departure={item.departure}
                  platform={item.platform}

                  timeColor={item.timeColor}
                  time={item.time}

                  placesColor={item.placesColor}
                  places={item.places}
                />
              })}

            </>
            :
            <>
              <div className="head-group">
                <p style={{ width: '10%' }}>Zpoždění</p>
                <p style={{ width: '40%' }}>Nástupiště</p>
                <p style={{ width: '10%' }}>Přes</p>
                <p style={{ width: '20%' }}>Odjezd</p>
                <p style={{ width: '10%' }}>Cílová stanice</p>
                <p style={{ width: '10%' }}>Číslo spoje</p>
              </div>

              {this.props.rows.map((item, index) => {
                return <Row
                  key={index}
                  stationsTypes={item.stationsTypes}
                  connectNumber={item.number}

                  destination={item.destination}
                  departureTime={item.departureTime}
                  departure={item.departure}
                  platform={item.platform}

                  timeColor={item.delay === 0 ? 'green': 'red' }
                  time={`${item.delay}min`}

                  placesColor={item.freeSeatsCount === 0 ? 'red': 'green'}
                  places={item.freeSeatsCount === 0 ? 'Occupied': 'Free seats'}
                />
              })}
            </>
        }


      </>
    );
  }
}

export default Table;
