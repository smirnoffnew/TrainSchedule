import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "./TableDelay.css";
import RowDelay from "../Row/RowDelay";

class TableDelay extends Component {
  componentDidUpdate = () => {};

  render() {
    return (
      <table className="delay-table">
        <thead>
          <tr className="delay-table__header">
            <th>{this.props.t("display.deartures.lineNumber")}</th>
            <th>{this.props.t("display.deartures.finalStation")}</th>
            <th>{this.props.t("display.deartures.connectionStations")}</th>
            <th>{this.props.t("display.deartures.departure")}</th>
            <th>{this.props.t("display.deartures.arrival")}</th>
            <th>{this.props.t("display.deartures.platform")}</th>
            <th>{this.props.t("display.deartures.delay")}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.rows &&
            this.props.rows.map((item, index) => (
              <RowDelay
                key={index}
                theme={this.props.theme}
                stationsTypes={item.stationsTypes}
                connectNumber={item.connectNumber}
                destination={item.destination}
                departureTime={item.departureTime}
                arrivalTime={item.arrivalTime}
                departure={item.departure}
                platform={item.platform}
                timeColor={item.delay === 0 ? "green" : "red"}
                time={
                  item.delay + " " + this.props.t("display.deartures.minutes")
                }
              />
            ))}
        </tbody>
      </table>
    );
  }
}

export default withTranslation()(TableDelay);
                   