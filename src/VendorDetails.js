import React, { Component } from "react";
import { Stepper } from "react-form-stepper";
import "./App.css";

class VendorDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { Vendorname, state } = this.props;

    return (
      <div className="form">
        <form>
          <Stepper
            steps={[
              { label: "Vendor Details" },
              { label: "Personnal details" },
              { label: "Terms" },
            ]}
            activeStep={0}
            styleConfig={{
              activeBgColor: "#2b7cff",
              activeTextColor: "#fff",
              inactiveBgColor: "#fff",
              inactiveTextColor: "#2b7cff",
              completedBgColor: "#fff",
              completedTextColor: "#2b7cff",
              size: "3em",
            }}
            className={"stepper"}
            stepClassName={"stepper__step"}
          />

          <div className="form-group" style={{ textAlign: "center" }}>
          <div className="form-group__element">
              <label htmlFor="Check" className="form-group__label">
             <h2> Kindly Verify Vendor Details Below making payment</h2>
              </label>
            </div>
            <div className="form-group__element">
              <label htmlFor="Vendor Name" className="form-group__label">
              Vendor Name : C2C Venture Pvt Ltd
              </label>
            </div>

            <div className="form-group__element">
              <label htmlFor="State" className="form-group__label">
                State : Tamil Nadu
              </label>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              className="buttons__button buttons__button--next"
              onClick={this.continue}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default VendorDetails;
