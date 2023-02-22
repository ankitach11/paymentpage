import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="App">
      
        <hr className="white"></hr>

        <div className="bottom">
          <div className="left">
            <div>
              <img
                src="https://www.beautybebo.com/pub/media/wysiwyg/payment.png"
                className="image_footer"
              />
            </div>
          </div>

          <div className="right">
            <h4>Sign up on our website</h4>
            <input
              name="email"
              type="email"
              className="signup-footer"
              onfocus="if(this.value=='Your email address') this.value='';"
              onblur="if(this.value=='') this.value='Your email address';"
              placeholder="Signup on our website"
              data-validate="{required:true, 'validate-email':true}"
            />

            <button className="action" title="Subscribe" type="submit">
              <span>Sign In </span>
            </button>
          </div>
        </div>
      </div>

      <div className="last">
        <h3>
          <address>2021© C2C Venture Private Limited</address>
        </h3>
      </div>
    </>
  );
}
