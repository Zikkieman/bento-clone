import "./payroll-header.scss";
import { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton,
  } from "@mui/material";


function PayrollHeader() {
    const [rightDropDown, setRightDropDown] = useState(false);
    const rightHandleDropDown = () => {
        setRightDropDown(!rightDropDown);
      };

  return (
    <div className="PH-main-div">
      <div className="PH-header-div">
        <h2>Payroll Schedule</h2>
        <div className="PH-current-month">
          <span>Payroll month: </span>
          <ListItem sx={{ padding: "" }}>
            <ListItemText primary="June" />
            <ListItemIcon onClick={rightHandleDropDown}>
              {rightDropDown ? (
                <ArrowDropUpIcon
                
                  style={{ color: rightHandleDropDown && "#0047cc" }}
                />
              ) : (
                <ArrowDropDownIcon sx={{ marginLeft: "20px" }} />
              )}
            </ListItemIcon>
          </ListItem>
        </div>
        <div>Proceed to Summary</div>
      </div>
    </div>
  );
}

export default PayrollHeader;
