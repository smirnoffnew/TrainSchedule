import React, { Component, Fragment } from 'react';
import { HeadTable } from '../component/headTable/HeadTable'
import TableSmall from '../component/Table/TableSmall';
import { getRows } from '../functions';

class TableSmallThree extends Component {
  state = {
    rows: [],
    locations: [],
    showLoader: true,
  }

  apiRequestLoop = () => {
    const rowsUrlLoop = "https://dpl-qa-ybus-pubapi.sa.cz/restapi/routes/10204002/departures"
    const locationsUrlLoop = "https://dpl-qa-ybus-pubapi.sa.cz/restapi/consts/locations"

    fetch(rowsUrlLoop, { mode: 'cors' })
      .then(response => response.json())
      .then(rowsData =>
        fetch(locationsUrlLoop, { mode: 'cors' })
          .then(response => response.json())
          .then(locationsData => {
            this.setState({
              rows: rowsData,
              locations: locationsData,
              showLoader: false,
            });
          })
          .catch(error => {
            console.log(error.message)
          })
      )
      .catch(error => {
        console.log(error.message)
      })
  }

  tick = () => {
    this.apiRequestLoop()
  }

  componentDidMount = () => {
    this.apiRequestLoop();
    setInterval(() => this.tick(), 1000 * 30)
  }

  render() {
    const { rows, locations, showLoader } = this.state;
    
    return (
      <Fragment>
        {showLoader && <div className="loader" />}
        <HeadTable />
        <TableSmall
          rows={getRows(rows, locations, 3)}
          theme='dark'
          even={true}
          endPaginationRows={3}
        />
      </Fragment>
    );
  }
}

export default TableSmallThree;