import React, { Component, Fragment } from 'react';
import { HeadTable } from '../component/headTable/HeadTable'
import { LiveLine } from '../component/liveLine/LiveLine'
import Table from '../component/Table/Table';
import { getRows, isNumber } from '../functions';
import { Redirect } from 'react-router-dom'
import { withTranslation } from 'react-i18next';

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
    let params = new URLSearchParams(window.location.search);
    this.props.i18n.changeLanguage(params.get('lang'));
    this.apiRequestLoop();
    params.get('refresh') && 
    setInterval(() => this.tick(), 1000 * params.get('refresh'))
  }
  render() {
    const { rows, locations, showLoader } = this.state;
    let params = new URLSearchParams(window.location.search);
    if (params.get('page') !== 'TableInsideLiveLine') {
      return <Redirect
        to={`/${params.get('page')}?lang=${params.get('lang')}&refresh=${params.get('refresh')}&page=${params.get('page')}`}
      />;
    }
    if (!params.get('refresh')) {
      return (
        <div className='not-found'>
          Refresh Query Not Found
        </div>
      )
    }
    if (!isNumber(+params.get('refresh'))) {
      return (
        <div className='not-found'>
          Refresh Query Must Be A Number
        </div>
      )
    }
    if (!params.get('lang')) {
      return (
        <div className='not-found'>
          Lang Query Not Found
        </div>
      )
    }
    if (
      params.get('lang') !== 'cs' &&
      params.get('lang') !== 'sk' &&
      params.get('lang') !== 'en' &&
      params.get('lang') !== 'ua' &&
      params.get('lang') !== 'de' &&
      params.get('lang') !== 'pl' &&
      params.get('lang') !== 'hu' &&
      params.get('lang') !== 'ru' &&
      params.get('lang') !== 'fr' &&
      params.get('lang') !== 'es'
    ) {
      return (
        <div className='not-found'>
          Lang Query Mismatched
          <br />
          Try to write correct lang into query. Here is a list
          <br />
          <br />
          <div className='list'>
            cs<br />sk<br />en<br />ua<br />de<br />
            pl<br />hu<br />ru<br />fr<br />es
          </div>
        </div>
      )
    }

    
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

export default withTranslation()(TableInsideLiveLine);