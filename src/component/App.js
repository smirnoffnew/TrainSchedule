import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    let params = new URLSearchParams(window.location.search);

    if (params.get('page')) {
      return <Redirect
        to={`/${params.get('page')}?lang=${params.get('lang')}&refresh=${params.get('refresh')}&page=${params.get('page')}`}
      />;
    }
    else{
      return <Redirect
        to={`/TableInside?lang=cs&refresh=5&page=TableInside`}
      />;
    }
  }
}

export default App;
