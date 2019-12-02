import React, { Component, Fragment } from "react";
import { withTranslation } from "react-i18next";
import "./DelayForm.css";

class DelayForm extends Component {
  state = {};

  render() {
    return (
      <form className="delay-form">
        <div className="input-field">
          <label>
            Zastávka
            <br />
            <input type="list" />
          </label>
        </div>
        <div className="input-field">
          <label>
            Datum
            <br />
            <input type="date" />
          </label>
        </div>
        <div className="checkbox-wrapper">
          <label>
            <input type="checkbox" />
            Vlaky
          </label>
          <label>
            <input type="checkbox" />
            Autobusy
          </label>
        </div>
        <button>Ukázat spoje</button>
      </form>
    );
  }
}

export default withTranslation()(DelayForm);
