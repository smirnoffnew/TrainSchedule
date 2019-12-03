import React, { Component, Fragment } from "react";
import { withTranslation } from "react-i18next";

import Select from "react-select";
import "./DelayForm.css";

class DelayForm extends Component {
  state = { selectedOption: null };

  render() {
    const options = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" }
    ];

    return (
      <form className="delay-form">
        <div className="input-field input-field--select">
          <label className="delay-form__label delay-form__label--select">
            Zastávka
          </label>
          <Select
            className="station-select"
            value={this.state.selectedOption}
            onChange={selectedOption => this.setState({ selectedOption })}
            options={options}
          />
          <button className="location-button" type="button"></button>
        </div>

        <div className="delay-form__flex-wrapper">
          <div className="input-field">
            <label className="delay-form__label">Datum </label>
            <input className="delay-form__date-picker" type="date" />
          </div>

          <div>
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                id="checkboxFirst"
                className="invisibleCheckbox"
              />
              <label className="checkbox-label" htmlFor="checkboxFirst"></label>
            </div>
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                id="checkboxSecond"
                className="invisibleCheckbox"
              />
              <label
                className="checkbox-label"
                htmlFor="checkboxSecond"
              ></label>
            </div>
          </div>
        </div>

        <button className="delay-form__button">Ukázat spoje</button>
      </form>
    );
  }
}

export default withTranslation()(DelayForm);
