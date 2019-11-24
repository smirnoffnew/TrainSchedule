import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { withTranslation } from 'react-i18next';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      routes: {
        'Table Inside': "/TableInside",
        'Table Inside LiveLine': "/TableInsideLiveLine",
        'Table Outside': "/TableOutside",
        'Table Outside LiveLine': "/TableOutsideLiveLine",
        'Table Small Two': "/TableSmallTwo",
        'Table Small Three': "/TableSmallThree",
      },
      languages: {
        'Slovak': 'sk',
        "English": 'en',
        'Ukrainian': 'ua',
        'German': 'de',
        'Polish': 'pl',
        'Hungarian': 'hu',
        'Russian': 'ru',
        'French': 'fr',
        'Spanish': 'es',
      },
      route: '',
      language: '',
    }
  }

  setValue = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  GO = () => {
    if(this.state.route.length && this.state.language.length > 0){
      this.props.i18n.changeLanguage(this.state.language);

      this.setState({
        redirect: true
      })
    }
    else{
      console.log('warning!!!')
    }
    
  }

  changeLanguage = lng => {
    this.props.i18n.changeLanguage(lng);
  };


  renderRoutes = () => {
    return Object.entries(this.state.routes).map(([key, value]) => {
      return <React.Fragment key={key}>
        <label
          htmlFor={key}
          className="container-checkbox"
        >
          {key}
          <input
            id={key}
            name='route'
            type="radio"
            value={value}
            checked={value === this.state.route}
            onClick={this.setValue}
            onChange={() => null}
          />
          <span className="checkmark"></span>
        </label>
      </React.Fragment>
    })
  }

  renderLanguages = () => {
    return Object.entries(this.state.languages).map(([key, value]) => {
      return <React.Fragment key={key}>
        <label
          htmlFor={key}
          className="container-checkbox"
        >
          {key}
          <input
            id={key}
            name='language'
            type="radio"
            value={value}
            checked={value === this.state.language}
            onClick={this.setValue}
            onChange={() => null}
          />
          <span className="checkmark"></span>
        </label>
      </React.Fragment>
    })
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to={this.state.route} />;
    }

    return (
      <>
        <div className='wrapper'>

          <p className='top-text'>Choose table and language</p>

          <div className='wrapper-routes'>
            {this.renderRoutes()}
          </div>
          <div className='wrapper-languages'>
            {this.renderLanguages()}
          </div>


          <button
            onClick={this.GO}
            className={
              this.state.route.length === 0 ||
              this.state.language.length === 0 ? 'btn-go btn-disabled' : 'btn-go' 
            }
            disabled={
              this.state.route.length === 0 ||
              this.state.language.length === 0
            }
          >
            GO
          </button>
        </div>

      </>
    );
  }
}

export default withTranslation()(App);
