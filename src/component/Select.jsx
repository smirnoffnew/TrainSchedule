import React from 'react';
import './Select.css'

export default class Select extends React.Component {

  handleChange = e => {
    this.props.setValue(e.target.value);
  }

  render() {
    const options = this.props.options.map((elem, index) => (
      <option
        key = {index}
        value={elem}
      >
        {elem}
      </option>
    ));

    return (
      <select
        value={this.props.value}
        onChange={this.handleChange}
        className='select'
      >
        {options}
      </select>
    );
  }
}