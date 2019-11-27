import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './NotFound.css'

class NotFound extends Component {
  render() {
    let params = new URLSearchParams(window.location.search);
    if (params.get('page')) {
      return (
        <>
          <div className='not-found'>
            <span className='large-font-size'>404!</span>
            <br />
            Page Not Found
            <br />
            Try to write correct page into query. Here is a list
            <br />
            <br />
            <div className='list'>
              TableInside
              <br />
              TableInsideLiveLine
              <br />
              TableOutside
              <br />
              TableOutsideLiveLine
              <br />
              TableSmallTwo
              <br />
              TableSmallThree
            </div>
          </div>
          <Redirect
            to={`/${params.get('page')}?lang=${params.get('lang')}&refresh=${params.get('refresh')}&page=${params.get('page')}`}
          />
        </>
      )
    }
  }
}

export default NotFound;




