import React, { Component } from "react";

//import trainIcon from "../../assets/Vector.png";
import "./RowDelay.css";
import LiveLineRow from "../liveLineRow/LiveLineRow";
import busIcon from "../../assets/bus-icon.png";
import trainIcon from "../../assets/train-icon.png";

class RowDelay extends Component {
  render() {
    const {
      theme,
      stationsTypes,
      connectNumber,
      destination,
      departureTime,
      arrivalTime,
      departure,
      platform,
      timeColor,
      time
    } = this.props;

    return (
      <tr className="delay-table__row">
        <td>
          {stationsTypes === "BUS_STATION" ? (
            <img src={busIcon} alt="bus-icon" />
          ) : (
            <img src={trainIcon} alt="train-icon" />
          )}
          {connectNumber}
        </td>
        <td className="delay-table__row__destination">{destination}</td>
        <td>
          <div className="rowItem-delay">
            <LiveLineRow text={departure} />
          </div>
        </td>
        <td>{departureTime}</td>
        <td>{arrivalTime}</td>
        <td>{platform}</td>
        <td
          className={`delay-table__row__delay--${
            time === "0 min" ? "positive" : "negative"
          }`}
        >
          {time === "0 min" ? "No delay" : { time }}
        </td>
        <td></td>
      </tr>

      /* <section className="row-delay">
        <div className="rowItem-delay" style={{ width: "10%" }}>
          {stationsTypes === "BUS_STATION" ? (
            theme === "light" ? (
              <div className="buss-icon-delay" style={{ alignSelf: "center" }}>
                <svg
                  width="33"
                  height="25"
                  viewBox="0 0 31 15"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.83693 13.2047C8.56213 14.2401 7.60871 15 6.46443 15C5.32015 15 4.36496 14.2401 4.09193 13.2047C4.03538 13.0099 4.00798 12.8047 4.00798 12.5961C4.00798 11.265 5.10897 10.1869 6.46443 10.1869C7.81901 10.1869 8.92177 11.2659 8.92177 12.5961C8.92177 12.8047 8.8926 13.0108 8.83693 13.2047ZM27.3248 13.2047C27.05 14.2401 26.0957 15 24.9514 15C23.8071 15 22.8528 14.2401 22.5798 13.2047C22.5232 13.0099 22.4958 12.8047 22.4958 12.5961C22.4958 11.265 23.5968 10.1869 24.9514 10.1869C26.306 10.1869 27.4087 11.2659 27.4087 12.5961C27.4096 12.8047 27.3805 13.0108 27.3248 13.2047ZM25.7467 1.87096H23.4926V5.87115H27.5846L25.7467 1.87096ZM22.4119 1.87096H18.2218V5.87115H22.4119V1.87096ZM17.1403 1.87096H12.9502V5.87115H17.1403V1.87096ZM11.8615 1.87096H7.67144V5.87115H11.8615V1.87096ZM6.5899 1.87096H2.67372V5.87115H6.5899V1.87096ZM29.4516 13.2047H28.3507C28.3851 13.0056 28.4054 12.8047 28.4054 12.5961C28.4054 10.7329 26.8627 9.21317 24.9523 9.21317C23.0508 9.21317 21.4991 10.7329 21.4991 12.5961C21.4991 12.8047 21.5203 13.0056 21.5548 13.2047H9.86193C9.89639 13.0056 9.91758 12.8047 9.91758 12.5961C9.91758 10.7329 8.37392 9.21317 6.46443 9.21317C4.56201 9.21317 3.01038 10.7329 3.01038 12.5961C3.01038 12.8047 3.03159 13.0056 3.06782 13.2047H1.96506C1.41722 13.2047 0.969238 12.7622 0.969238 12.2231V0.97374C0.969238 0.441658 1.41722 0 1.96506 0H26.1186C26.6727 0 27.2832 0.407769 27.4935 0.905074L30.4492 8.06554V12.2231C30.4492 12.7622 29.9995 13.2047 29.4516 13.2047Z"
                    fill="#1c2d4d"
                  />
                </svg>
              </div>
            ) : (
              <div className="buss-icon-delay" style={{ alignSelf: "center" }}>
                <svg
                  width="33"
                  height="25"
                  viewBox="0 0 31 15"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.83693 13.2047C8.56213 14.2401 7.60871 15 6.46443 15C5.32015 15 4.36496 14.2401 4.09193 13.2047C4.03538 13.0099 4.00798 12.8047 4.00798 12.5961C4.00798 11.265 5.10897 10.1869 6.46443 10.1869C7.81901 10.1869 8.92177 11.2659 8.92177 12.5961C8.92177 12.8047 8.8926 13.0108 8.83693 13.2047ZM27.3248 13.2047C27.05 14.2401 26.0957 15 24.9514 15C23.8071 15 22.8528 14.2401 22.5798 13.2047C22.5232 13.0099 22.4958 12.8047 22.4958 12.5961C22.4958 11.265 23.5968 10.1869 24.9514 10.1869C26.306 10.1869 27.4087 11.2659 27.4087 12.5961C27.4096 12.8047 27.3805 13.0108 27.3248 13.2047ZM25.7467 1.87096H23.4926V5.87115H27.5846L25.7467 1.87096ZM22.4119 1.87096H18.2218V5.87115H22.4119V1.87096ZM17.1403 1.87096H12.9502V5.87115H17.1403V1.87096ZM11.8615 1.87096H7.67144V5.87115H11.8615V1.87096ZM6.5899 1.87096H2.67372V5.87115H6.5899V1.87096ZM29.4516 13.2047H28.3507C28.3851 13.0056 28.4054 12.8047 28.4054 12.5961C28.4054 10.7329 26.8627 9.21317 24.9523 9.21317C23.0508 9.21317 21.4991 10.7329 21.4991 12.5961C21.4991 12.8047 21.5203 13.0056 21.5548 13.2047H9.86193C9.89639 13.0056 9.91758 12.8047 9.91758 12.5961C9.91758 10.7329 8.37392 9.21317 6.46443 9.21317C4.56201 9.21317 3.01038 10.7329 3.01038 12.5961C3.01038 12.8047 3.03159 13.0056 3.06782 13.2047H1.96506C1.41722 13.2047 0.969238 12.7622 0.969238 12.2231V0.97374C0.969238 0.441658 1.41722 0 1.96506 0H26.1186C26.6727 0 27.2832 0.407769 27.4935 0.905074L30.4492 8.06554V12.2231C30.4492 12.7622 29.9995 13.2047 29.4516 13.2047Z"
                    fill="#FEFEFE"
                  />
                </svg>
              </div>
            )
          ) : (
            <img
              src={trainIcon}
              alt="TrainLogo"
              className="train-icon"
              style={{ alignSelf: "center" }}
            />
          )}

          <div className="row-item-text-delay" style={{ paddingLeft: 7 }}>
            {connectNumber}
          </div>
        </div>

        <div className="rowItem-delay" style={{ width: "30%" }}>
          <div className="row-item-text-delay">{destination}</div>
        </div>

        <div className="rowItem-delay" style={{ width: "10%" }}>
          <div className="row-item-text-delay">{departureTime}</div>
        </div>

        <div className="rowItem-delay" style={{ width: "10%" }}>
          <div className="row-item-text-delay">{arrivalTime}</div>
        </div>

        <div className="rowItem-delay" style={{ width: "20%" }}>
          <div className="row-item-text-delay">
            <LiveLineRow text={departure} />
          </div>
        </div>

        <div className="rowItem-delay" style={{ width: "10%" }}>
          <div className="row-item-text-delay">{platform}</div>
        </div>

        <div className="rowItem-delay" style={{ width: "10%" }}>
          <div
            className={
              timeColor === "red"
                ? "row-item-text-delay red-delay"
                : "row-item-text-delay green-delay"
            }
          >
            {time}
          </div>
        </div>
      </section> */
    );
  }
}

export default RowDelay;
