import "./FourthStyles.css";
import Countries from "../../images/asset 15.svg"
import smallCountries from "../../images/asset 16.svg"
import { useMediaQuery, useTheme } from "@mui/material";

export const Fourth = () => {
  const theme = useTheme();
  const smallCountry = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="fourth-div">
      <div className="fourth-sub-div">
        <h4 className="about-us">ABOUT US</h4>
        <h1 className="fourth-header">
          We’re reimagining work, pay, and spending <span>across Africa</span>
        </h1>
        <div>
          <p className="fourth-first-p">
            We are a pan-African team committed to meeting work wherever it’s
            happening across Africa.
          </p>
        </div>
        <div>
          <p className="fourth-second-p">
            Whether you are a big corporate in Nairobi, a tech startup in
            Kigali, a bookstore in Lagos, or just trying to do more for your
            domestic staff, we’re building solutions to meet you where you are.
          </p>
        </div>
        <button className="fourth-button">Visit Our Blog</button>
        <h3>Available in 4 countries today, with many more coming soon</h3>
      </div>
      <div>
        {smallCountry ? (
          <>
           <div style={{textAlign: "center", marginTop: "50px"}}><img src={smallCountries}/></div> 
          </>
        ) : (
          <>
            <img src={Countries} className="countries-svg" />
          </>
        )}
      </div>
    </div>
  );
};
