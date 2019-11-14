import React, { Component, Fragment } from 'react';
import { HeadTable } from '../component/headTable/HeadTable'
import TableSmall from '../component/Table/TableSmall';

const rows = [
  {
    connectNumber: "ft 109",
    destination: "Brno",
    departureTime: "13:00",
    departure: "Phaga",
    platform: "3/4",
    time: '40 min',
    timeColor: 'red',

    places: 'zanato',
    placesColor: 'red'
  },
  {
    connectNumber: "ft 109",
    destination: "Brno",
    departureTime: "13:00",
    departure: "Phaga PhagaPhaga",
    platform: "3/4",
    time: '45 min',
    timeColor: 'red',

    places: 'zanato',
    placesColor: 'red'
  },
  {
    connectNumber: "ft 109",
    destination: "Brno",
    departureTime: "13:00",
    departure: "Phaga",
    platform: "3/4",
    time: '1 hour 35 min',
    timeColor: 'red',

    places: 'Volná místa',
    placesColor: 'green'
  },
  {
    connectNumber: "ft 109",
    destination: "Brno",
    departureTime: "13:00",
    departure: "Phaga",
    platform: "3/4",

    time: '0 min',
    timeColor: 'green',

    places: 'zanato',
    placesColor: 'green'
  },
  {
    connectNumber: "ft 109",
    destination: "Brno",
    departureTime: "13:00",
    departure: "Phaga",
    platform: "3/4",
    time: '1 hour',
    timeColor: 'red',

    places: 'zanato',
    placesColor: 'red'
  },
]

class TableSmallTwo extends Component {
  render() {
    return (
      <Fragment>
        <HeadTable />
        <TableSmall 
          rows={rows}
          theme='dark'
          even={false}
        />
      </Fragment>
    );
  }
}

export default TableSmallTwo;