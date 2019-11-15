import React, { Component } from 'react';
import Select from './Select';
// import MenuItem from './MenuItem';
import { Redirect } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '/TableInside' };
    this.options = [
      "/TableInside",
      "/TableInsideLiveLine",
      "/TableOutside",
      "/TableOutsideLiveLine",
      "/TableSmallTwo",
      "/TableSmallThree",
    ];
  }

  setValue = (value) => {
    this.setState({ value });
  }

  render() {
    return (
      <>
        <Select options={this.options} setValue={this.setValue} />
        <Redirect to={{
          pathname: this.state.value
        }} />
      </>
    );
  }
}

export default App;
