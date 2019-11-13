import React, { Component } from 'react';
import { HeadTable } from './headTable/HeadTable'
import { LiveLine } from '../component/liveLine/LiveLine'
import Table from './Table/Table';

class App extends Component {
  render() {
    return (
      <>
        <HeadTable />
        <Table />
        <LiveLine
          text={'dfsjdf sdfkgj ghskdf ;jjd;s kdf dfksfgjjgsldk;gj dfgjdkl;gj lllllllllll;jk;jkl lkj; jh dndkfgfkjhgsgjhjsldgfj sdfgj kdjgsdf jsdfk '}
        />
      </>
    );
  }
}

export default App;
