import React, { Component, Fragment } from 'react';
import { HeadTable } from '../component/headTable/HeadTable'
import { LiveLine } from '../component/liveLine/LiveLine'
import Table from '../component/Table/Table';

const rows = [
  {
    connectNumber: "ft 109",
    destination: "Brno",
    departureTime: "13:00",
    departure: "Phaga",
    platform: "3/4",
    time: '40 min',
    timeColor: 'red',

    places: 'Obsazeno',
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

    places: 'Obsazeno',
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

    places: 'Obsazeno',
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

    places: 'Obsazeno',
    placesColor: 'red'
  },
]

class TableOutsideLiveLine extends Component {
  render() {
    return (
      <Fragment>
        <HeadTable />
        <Table 
          rows={rows}
          collumns={7} // 7 or 6
          theme='light' // dark , light
          even={true}
        />
        <LiveLine
          text={'dfsjdf sdfkgj ghskdf ;jjd;s kdf dfksfgjjgsldk;gj dfgjdkl;gj lllllllllll;jk;jkl lkj; jh dndkfgfkjhgsgjhjsldgfj sdfgj kdjgsdf jsdfk '}
        />
      </Fragment>
    );
  }
}

export default TableOutsideLiveLine;