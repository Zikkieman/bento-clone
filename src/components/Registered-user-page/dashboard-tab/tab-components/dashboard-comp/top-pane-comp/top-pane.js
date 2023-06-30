import { Divider, Grid, useMediaQuery, useTheme } from "@mui/material";
import peopleIcon from "../../../../dashImg/asset 0.svg";
import "./top-pane.styles.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../../../../context/user.context";

function TopPane() {
  const {userProfile} = useContext(UserContext)

  const {country} = userProfile

  let currency;

  const handleCurrency = () => {
      if(country === "Nigeria"){
        currency = "NGN"
      } else if (country === "Rwanda") {
        currency = "RWF"
      } else if (country === "Kenya"){
        currency = "KES"
      } else if (country === "Ghana"){
        currency = "GHS"
      }
  
      return currency
    }

  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className="Top-pane-div">
      <div className="pane-fir-div">
        <div className="subpane-fir-div">
          <div>
            <p>Payroll Size</p>
            <h2>{handleCurrency()} 0.00</h2>
            <span>
              {" "}
              <span className="inner-span">&#x2198; {handleCurrency()} 0.00</span> less than
              last payroll
            </span>
          </div>
          <div className="pane-butt">
            <Link to="/payroll">
              <button className="top-pane-button ">&gt;</button>
            </Link>
          </div>
        </div>
        {isMedium ? (
          <Divider
            sx={{
              borderBottomWidth: 2,
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />
        ) : (
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderRightWidth: 2, marginRight: "20px" }}
          />
        )}

        <div className="subpane-sec-div">
          <div>
            <p>Active Employees</p>
            <h2>0</h2>
            <span>
              {" "}
              <span className="inner-span">&#x2198; 0 </span> less than last
              payroll
            </span>
          </div>

          <div className="pane-butt">
            <Link to="/employee">
              {" "}
              <button className="top-pane-button ">&gt;</button>{" "}
            </Link>
          </div>
        </div>
        {isMedium ? (
          <Divider
            sx={{
              borderBottomWidth: 2,
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />
        ) : (
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderRightWidth: 2, marginRight: "20px" }}
          />
        )}
        <div className="subpane-third-div">
          <div>
            <p>Benefits</p>
            <h2>0</h2>
          </div>
          <div className="pane-butt">
            <Link to="/benefit">
              <button className="top-pane-button ">&gt;</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="pane-sec-div">
        <div className="sec-inner-one">
          <span>Bento People</span>
          <p>Inituitive HR software built to help you easily scale.</p>
          <h4>Get Started &rarr;</h4>
        </div>
        <div className="people-icon-div">
          {" "}
          <img src={peopleIcon} alt="people's icon" />
        </div>
      </div>
    </div>
  );
}

export default TopPane;
