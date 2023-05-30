import { Grid, ListItem, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import AppleIcon from "@mui/icons-material/Apple";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./FifthStyles.css";
import {SimpleAccordion} from "./accordion/AccComp"
import { ResponsiveAcc} from "./accordion/SmallAccComp";

export const Fifth = () => {
  const theme = useTheme()
  const respAccordion = useMediaQuery(theme.breakpoints.down("xl"))
  console.log(respAccordion)
  return (
    <div className="fifth-div">
      <div>
        <div>
          <h2 className="fifth-header">
            Ready to power your company and your people?
          </h2>
        </div>

        <div>
          <p className="fifth-p">
            Create an account instantly and start setting up payroll for your
            company.
          </p>
        </div>
        <button className="fifth-first-button">Create An Account</button>
        <button className="fifth-second-button">Request A Demo</button>
      </div>
      <hr />
      {
        respAccordion ? (<><ResponsiveAcc/></>) : (<><SimpleAccordion /></>)
      }

      
    </div>
  );
};
