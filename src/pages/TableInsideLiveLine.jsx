import React, { Component, Fragment } from 'react';
import { HeadTable } from '../component/headTable/HeadTable'
import { LiveLine } from '../component/liveLine/LiveLine'
import Table from '../component/Table/Table';
import { getRows } from '../functions';

class TableInsideLiveLine extends Component {
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
        <Table
          rows={getRows(rows, locations, 7)}
          collumns={6} // 7 or 6
          theme='dark' // dark , light
          even={true}
          endPaginationRows={7}
        />
        <LiveLine
          text={'dfsjdf sdfkgj ghskdf ;jjd;s kdf dfksfgjjgsldk;gj dfgjdkl;gj lllllllllll;jk;jkl lkj; jh dndkfgfkjhgsgjhjsldgfj sdfgj kdjgsdf jsdfk '}
        />
      </Fragment>
    );
  }
}

export default TableInsideLiveLine;