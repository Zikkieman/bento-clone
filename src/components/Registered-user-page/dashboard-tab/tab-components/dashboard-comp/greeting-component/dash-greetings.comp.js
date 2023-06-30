import { useContext, useState } from "react";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import "./dash-greetings.styles.scss";
import { UserContext } from "../../../../../../context/user.context";

function DashGreetings() {
  const [dropDown, setDropDown] = useState(false);
  const {userProfile} = useContext(UserContext)

  const {email, displayName, companyName, country} = userProfile

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  let currDate = new Date();

  let hours = currDate.getHours();

  let greet;

  if (hours < 12) {
    greet = "morning";
  } else if (hours >= 12 && hours < 18) {
    greet = "afternoon";
  } else if (hours >= 18 && hours <= 23) {
    greet = "evening";
  }

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
  return (
<div>
    <div className="greetings-main-div">
      <div className="greetings-fir-div">
        <h2>Good {greet},</h2>
        <p>{displayName}!</p>
      </div>
      <div className="greetings-sec-div" onClick={handleDropDown} style={{border: dropDown ? "1.5px solid #0047cc" : null}}>
        <ListItem sx={{padding: "4px 8px"}}>
          <ListItemIcon >
            <ListItemText primary={handleCurrency()} sx={{ color: "#000", padding : "0px 5px" }} />
            {dropDown ? (
              <ArrowDropUpIcon sx={{ marginLeft: "2px", marginTop: "2px" }} style={{color: dropDown ? "#0047cc" : "#8f8f8f"}}/>
            ) : (
              <ArrowDropDownIcon sx={{ marginLeft: "2px", marginTop: "2px" }} />
            )}
          </ListItemIcon>
        </ListItem>
      </div>
      
    </div>

<div className="currency-dropdown" >
{
  dropDown && <ListItemText primary="NGN" sx={{ color: "#000", padding : "5px 5px", backgroundColor: "#f8f8f8" }} />
}
</div>
</div>
  );
}

export default DashGreetings;
