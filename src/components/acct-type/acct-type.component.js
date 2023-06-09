import "./acct-type.styles.scss";
import { Grid } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function AcctType() {
  const [choice, setChoice] = useState(false);

  const style = {
    border: "2px solid grey",
    backgroundColor: "white",
  };
  const divStyle = {
    border: "2px solid grey",
  };

  function handleChoice() {
    setChoice(!choice);
  }

  return (
    <div className="accttype-main-div">
      <div className="acctype-nav">
       <Link to="/" className="type-link"><h4>Bento</h4></Link> 
        <span>Already have an account?</span>
        <Link to="/sign-in"><button>Sign In</button></Link> 
      </div>
      <div className="type-div">
        <div className="type-header-div">
          <h3>Let’s get you started</h3>
          <p>Welcome to Bento! Select an account type to get started.</p>
        </div>

        <div>
          <div
            className="type-body-div"
            onClick={handleChoice}
            style={choice ? divStyle : {}}
          >
            <div
              className="outer-rounded-circle first-rounded-button"
              //   onClick={handleChoice}
              style={choice ? style : {}}
            >
              <div className="inner-rounded-circle"></div>
            </div>
            <div className="type-p-div">
              <p>I want to create company account</p>
              <span>
                The company has a registration number and operates as a legal
                entity.
              </span>
            </div>
          </div>

          <div
            className="type-body-div"
            onClick={handleChoice}
            style={choice ? {} : divStyle }
          >
            <div
              className="outer-rounded-circle first-rounded-button"
              style={choice ? {} : style}
            >
              <div className="inner-rounded-circle"></div>
            </div>
            <div className="type-p-div">
              <p>I was invited to join a company</p>
              <span>
                You received an invitation to join a company and want to setup
                your personal account.
              </span>
            </div>
          </div>

          <Link to={choice ? "/sign-in" : "/sign-up"}><button className="type-continue">Continue</button></Link>
        </div>
      </div>
    </div>
  );
}

export default AcctType;
