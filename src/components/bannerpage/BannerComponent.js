// import { useMediaQuery, useTheme } from "@mui/material";
import "./BannerStyles.css";
import globe from "../../images/asset 0.png";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <div className="banner-div">
      <Grid container className="pad-div">
        <Grid item xs={12} sm={12} md={6}>
          <div className="word-div">
            <div className="headword-div">
              <h1 className="headword">Meeting work wherever it happens</h1>
              <p className="heading-p">
                Bento is reimagining Salaries, Benefits & HRM for employers and
                employees across Africa, wherever work happens
              </p>
            </div>
            <div className="banner-button-div">
              <Link to="/accttype">
                {" "}
                <button className="first-banner-button"> Get Started </button>
              </Link>
              <button className="second-banner-button">
                {" "}
                Request Demo <span className="button-span">&gt;</span>
              </button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} className="globe-img-div">
          <img className="globe-img" src={globe} alt="globe-img" />
        </Grid>
      </Grid>
    </div>
  );
};
