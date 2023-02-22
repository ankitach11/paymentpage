import React, { Component } from "react";
import { Stepper } from "react-form-stepper";
import "./App.css";

class Terms extends Component {
  continue = (e) => {
    e.preventDefault();
    const isAmountValid = this.props.validateAmount();
    if (isAmountValid) {
      this.props.nextStep();
    }
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
     amount,
     termsAndConditions,
     submitData,
     handleChange,
     validateamount
    } = this.props;

    return (
      <div className="form">
        <div>
          <Stepper
            steps={[
                { label: "Vendor Details" },
                { label: "Personnal details" },
                { label: "Terms" },
            ]}
            activeStep={2}
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

          <div className="summary">
            <h2 className="summary__heading">Terms and Conditions</h2>
<p>Confirm Paysecurely.online Terms   Conditions to Pay</p>
            <div>
            
              <div className="form-group__element">
              <label htmlFor="amount" className="form-group__label">
                amount
              </label>
              <input
                type="text"
                value={amount}
                name="phone"
                // onChange={handleChange("amount")}
                onBlur={validateamount}
                className="form-group__input"
              />
            </div>
              <div>
                <p>
                  <span className="summary__item-title">Terms And Conditions:</span> {}
                </p>
              </div>
            </div>
          </div>

      
          <div className="buttons">
            <button
              className="buttons__button buttons__button--back"
              onClick={this.back}
            >
              Back
            </button>
            <button
              className="buttons__button buttons__button--next"
              type="submit"
              onClick={submitData}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Terms;
