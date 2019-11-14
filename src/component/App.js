import React, { Component } from 'react';
import { HeadTable } from './headTable/HeadTable'
import { LiveLine } from '../component/liveLine/LiveLine'
import Table from './Table/Table';

const rows = [
  {
    connectNumber: "ft 109",
    destination: "Brno",
    departureTime: "13:00",
    departure: "Phaga",
    platform: "3/4",
    time: '40 min',
    timeColor: 'red',

    // places: 'zanato',
    // placesColor: 'red'
  },
  {
    connectNumber: "ft 109",
    destination: "Brno",
    departureTime: "13:00",
    departure: "Phaga PhagaPhaga",
    platform: "3/4",
    time: '45 min',
    timeColor: 'red',

    // places: 'zanato',
    // placesColor: 'red'
  },
  {
    connectNumber: "ft 109",
    destination: "Brno",
    departureTime: "13:00",
    departure: "Phaga",
    platform: "3/4",
    time: '1 hour 35 min',
    timeColor: 'red',

    // places: 'zanato',
    // placesColor: 'green'
  },
  {
    connectNumber: "ft 109",
    destination: "Brno",
    departureTime: "13:00",
    departure: "Phaga",
    platform: "3/4",

    time: '0 min',
    timeColor: 'green',

    // places: 'zanato',
    // placesColor: 'green'
  },
  {
    connectNumber: "ft 109",
    destination: "Brno",
    departureTime: "13:00",
    departure: "Phaga",
    platform: "3/4",
    time: '1 hour',
    timeColor: 'red',

    // places: 'zanato',
    // placesColor: 'red'
  },
]

class App extends Component {
  render() {
    return (
      <>
        <HeadTable />
        <Table 
          rows={rows}
          collumns={6} // 7 or 6
          theme='dark' // dark , light
          even={true}
        />
        <LiveLine
          text={'dfsjdf sdfkgj ghskdf ;jjd;s kdf dfksfgjjgsldk;gj dfgjdkl;gj lllllllllll;jk;jkl lkj; jh dndkfgfkjhgsgjhjsldgfj sdfgj kdjgsdf jsdfk '}
        />
      </>
    );
  }
}

export default App;
