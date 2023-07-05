import "./payroll-header.scss";
import { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import BasicTabs from "../payroll-body/payroll-tab";
import getMonth, { SelectedListItem } from "./currentMonth";

function PayrollHeader() {
  const [changeColor, setChangeColor] = useState(false);
  const HandleChangeColor = () => {
    setChangeColor(!changeColor);
  };



  return (
    <div className="PH-main-div">
      <div className="PH-header-div">
        <h2>Payroll Schedule</h2>
        <div
          className="PH-current-month"
          onClick={HandleChangeColor}
          style={{ border: changeColor && "1.5px solid #0047cc" }}
        >
          <p>Payroll month: </p>
          <span>{getMonth()}</span>
          {changeColor ? (
            <ArrowDropUpIcon
              style={{
                color: changeColor && "#0047cc",
                margin: "10px 15px 15px 0",
              }}
            />
          ) : (
            <ArrowDropDownIcon style={{ margin: "10px 15px 15px 0" }} />
          )}
        </div>
        <div className="PH-summary">Proceed to Summary</div>
      </div>
      <BasicTabs />
      {
        changeColor && <SelectedListItem />
      }
    </div>
  );
}

export default PayrollHeader;
