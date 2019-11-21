import React, { Component, Fragment } from 'react';

import { HeadTable } from '../component//headTable/HeadTable'
import Table from '../component/Table/Table';

// const rows = [
//   {
//     connectNumber: "ft 109",
//     destination: "Brno",
//     departureTime: "13:00",
//     departure: "Phaga",
//     platform: "3/4",
//     time: '40 min',
//     timeColor: 'red',

//     // places: 'Obsazeno',
//     // placesColor: 'red'
//   },
//   {
//     connectNumber: "ft 109",
//     destination: "Brno",
//     departureTime: "13:00",
//     departure: "Phaga PhagaPhaga",
//     platform: "3/4",
//     time: '45 min',
//     timeColor: 'red',

//     // places: 'Obsazeno',
//     // placesColor: 'red'
//   },
//   {
//     connectNumber: "ft 109",
//     destination: "Brno",
//     departureTime: "13:00",
//     departure: "Phaga",
//     platform: "3/4",
//     time: '1 hour 35 min',
//     timeColor: 'red',

//     // places: 'Obsazeno',
//     // placesColor: 'green'
//   },
//   {
//     connectNumber: "ft 109",
//     destination: "Brno",
//     departureTime: "13:00",
//     departure: "Phaga",
//     platform: "3/4",

//     time: '0 min',
//     timeColor: 'green',

//     // places: 'Obsazeno',
//     // placesColor: 'green'
//   },
//   {
//     connectNumber: "ft 109",
//     destination: "Brno",
//     departureTime: "13:00",
//     departure: "Phaga",
//     platform: "3/4",
//     time: '1 hour',
//     timeColor: 'red',

//     // places: 'Obsazeno',
//     // placesColor: 'red'
//   },
// ]

class TableInside extends Component {

  state = {
    rows:[],
    locations:[]
  }

  componentDidMount() {
    fetch(`https://dpl-qa-ybus-pubapi.sa.cz/restapi/routes/10204002/departures`,{ mode: 'cors' })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            rows: result
          });
        })
      .catch((error) => {
        console.log('err departures',error)	  
      });

    fetch(`https://dpl-qa-ybus-pubapi.sa.cz/restapi/consts/locations`,{ mode: 'cors' })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            locations: result
          });
        })
      .catch((error) => {
        console.log('err locations',error)	  
      });
  }

  render() {
    const { rows, locations } = this.state;
    const newRows = rows.map((item, index) => {
      let firtsStation = item.connectionStations.filter((station) => {
        return station.arrival === null
      });
      let endStation = item.connectionStations[item.connectionStations.length-1].stationId;
      let citys = [];
      let stations = [];
      for (let index = 0; index < locations.length; index++) {
        for (let index2 = 0; index2 < locations[index].cities.length; index2++) {
          const town = locations[index].cities[index2];
          citys.push(town);
        }
      }
      citys = [...citys];
      let name;
      for (let index = 0; index < citys.length; index++) {
        for (let index2 = 0; index2 < citys[index].stations.length; index2++) {
          const station = citys[index].stations[index2];
          stations.push(station);
          if (station.id === endStation) {
            name = citys[index].name;
          }
        }
      }
      let startStation = stations.filter((item2)=>{
        return item2.id === firtsStation[0].stationId;
      });

      const trowStations = item.connectionStations.slice(0,item.connectionStations.length-1);
      let counter = 0;
      setInterval(() => {
        counter === trowStations.length-1 ? counter-- :  counter++
      }, 60*1000*5);
      const trowStation = stations.filter((item3)=>{
        return item3.id === trowStations[counter].stationId;
      })
      const normalRow = {};
      normalRow.number = item.number;
      normalRow.delay = item.delay;
      normalRow.freeSeatsCount = item.freeSeatsCount;
      normalRow.destination = name;
      normalRow.departureTime =  firtsStation[0].departure.substring(firtsStation[0].departure.indexOf('T')+1,firtsStation[0].departure.indexOf('T')+6);
      normalRow.departure = trowStation[0].fullname;
      normalRow.platform = firtsStation[0].platform;
      normalRow.stationsTypes = startStation[0].stationsTypes[0];
      return normalRow;
    });
    return (
      <Fragment>
        <HeadTable />
        <Table 
          rows={newRows}
          collumns={6} // 7 or 6
          theme='dark' // dark , light
          even={true}
        />
      </Fragment>
    );
  }
}

export default TableInside;