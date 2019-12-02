export const getRows = (rows, locations, endPaginationRows) => {
  if (locations.length > 0 && rows.length > 0) {

    const newRows = rows.map(item => {
      let firtsStation = item.connectionStations.filter((station) => {
        return station.arrival === null
      });

      let endStation = item.connectionStations[item.connectionStations.length - 1].stationId;

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
            name = station.fullname;
          }
        }
      }

      let startStation = stations.filter((item2) => {
        return item2.id === firtsStation[0].stationId;
      });

      const trowStations = item.connectionStations.slice(0, item.connectionStations.length - 1);
      let trowStationsFullNames = []
      stations.filter((item3) => {
        return trowStations.forEach((ee) => {
          ee.stationId === item3.id && trowStationsFullNames.push(item3.fullname.split('-')[0])
        })
      })

      const normalRow = {};
      normalRow.connectNumber = item.number;
      normalRow.delay = item.delay;
      normalRow.freeSeatsCount = item.freeSeatsCount;
      normalRow.destination = name;
      normalRow.departureTime = firtsStation[0].departure.substring(firtsStation[0].departure.indexOf('T') + 1, firtsStation[0].departure.indexOf('T') + 6);
      normalRow.arrivalTime = item.connectionStations[
        item.connectionStations.length - 1
      ].arrival.substring(
        item.connectionStations[
          item.connectionStations.length - 1
        ].arrival.indexOf("T") + 1,
        item.connectionStations[
          item.connectionStations.length - 1
        ].arrival.indexOf("T") + 6
      );
      normalRow.departure = trowStationsFullNames.join(' ');
      normalRow.platform = firtsStation[0].platform;
      normalRow.stationsTypes = startStation[0].stationsTypes[0];

      return normalRow;
    });

    const startPaginationRows = 0;
    // const endPaginationRows = 10;

    return newRows.slice(startPaginationRows, endPaginationRows);
  }
}

export const isNumber = value => {
  return (value instanceof Number||typeof value === 'number') && !isNaN(value);
}

