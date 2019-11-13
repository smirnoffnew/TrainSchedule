import React, { Component } from 'react';
import { Row } from '../rows/Row'
import './Table.css'

const rows = [
  {
    connectNumber: "ft109",
    destination: "Brno",
    departure: "13-00",
    through: "Phaga",
    platform: "3/4",
    time: '25 min'
  },
  {
    connectNumber: "ft109",
    destination: "Brno",
    departure: "13-00",
    through: "Phaga PhagaPhaga",
    platform: "3/4",
    time: '0 min'
  },
  {
    connectNumber: "ft109",
    destination: "Brno",
    departure: "13-00",
    through: "Phaga",
    platform: "3/4",
    time: '25 min'
  },
  {
    connectNumber: "ft109",
    destination: "Brno",
    departure: "13-00",
    through: "Phaga",
    platform: "3/4",
    time: '0 min'
  },
]

class Table extends Component {
  render() {
    return (
      <>
        <div className="head-group">
          <p style={{ width: '10%' }}>Zpoždění</p>
          <p style={{ width: '40%' }}>Nástupiště</p>
          <p style={{ width: '10%' }}>Přes</p>
          <p style={{ width: '20%' }}>Odjezd</p>
          <p style={{ width: '10%' }}>Cílová stanice</p>
          <p style={{ width: '10%' }}>Číslo spoje</p>
        </div>

        {rows.map((item, index) => {
          return <Row
            key={index}
            connectNumber={item.connectNumber}
            destination={item.destination}
            departure={item.departure}
            through={item.through}
            platform={item.platform}
            time={item.time}
          />
        })}

      </>
    );
  }
}

export default Table;
