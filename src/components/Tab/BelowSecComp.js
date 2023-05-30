import { Grid } from "@mui/material";
import firstIcon from "../../images/asset 7.png"
import secondIcon from "../../images/asset 8.png"
import thirdIcon from "../../images/asset 7.png"
import fourthIcon from "../../images/asset 10.png"
import "./BelowStyles.css"

export const Below = () => {
  return (
    <div className="below-main-div">
      <h1 className="below-heading">Why employers are choosing <span>Bento</span>  for their businesses & staff</h1>
      <Grid container>
        <Grid item sm={12} md={6} lg={3}>
          <div>
            <img className="below-img" src={firstIcon} />
            <h3 className="below-subhead">We meet you where you are</h3>
            <p className="below-p">Our products are designed to meet you where you are. No matter your company size, Bento offers solutions for you & your staff.</p>
          </div>
        </Grid>
        <Grid item sm={12} md={6} lg={3}>
          <div>
            <img className="below-img" src={secondIcon} />
            <h3 className="below-subhead">Unbeatable pricing</h3>
            <p className="below-p">Our friendly, pay-as-you go pricing is unbeatable in the market. You only pay for what your company uses, when you use it.</p>
          </div>
        </Grid>
        <Grid item sm={12} md={6} lg={3}>
          <div>
            <img className="below-img" src={thirdIcon} />
            <h3 className="below-subhead">Secure & compliant</h3>
            <p className="below-p">Payroll & HR is serious business. We take effort to ensure all company information & transactions are kept secure, confidential & compliant.</p>
          </div>
        </Grid>
        <Grid item sm={12} md={6} lg={3}>
          <div>
            <img className="below-img" src={fourthIcon} />
            <h3 className="below-subhead">Hands-on support</h3>
            <p className="below-p">Our support team is your team. We’re hands-on to help you work through your any inquiries, whenever you need help.</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
