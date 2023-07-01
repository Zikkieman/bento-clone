import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import "./down-pane.scss";
import { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import graphImg from "../../../../dashImg/download-img.png";
import leftPaneImg from "../../../../dashImg/download-left-downpane.png";
import Month from "./month-dropdown";

function DownPane() {
  const [dropDown, setDropDown] = useState(false);

  const [rightDropDown, setRightDropDown] = useState(false);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const rightHandleDropDown = () => {
    setRightDropDown(!rightDropDown);
  };
  return (
    <div className="downpane-div">
      <div className="right-downpane-div">
        <div className="downpane-fir-div">
          <h2>Payroll History</h2>
          <div
            className="downpane-get-started"
            onClick={rightHandleDropDown}
            style={{ border: rightDropDown && "1px solid #0047cc" }}
          >
            <ListItem sx={{ padding: "5px 5px 5px 10px" }}>
              <ListItemText primary="Last 12 months" />
              <ListItemIcon onClick={rightHandleDropDown}>
                {rightDropDown ? (
                  <ArrowDropUpIcon
                    sx={{ marginLeft: "20px" }}
                    style={{ color: rightDropDown && "#0047cc" }}
                  />
                ) : (
                  <ArrowDropDownIcon sx={{ marginLeft: "20px" }} />
                )}
              </ListItemIcon>
            </ListItem>
          </div>
        </div>
        {rightDropDown && (
          <div className="right-down-pane">
            <ListItemButton sx={{ height: "40px" }}>
              <ListItem>
                <ListItemText>This year</ListItemText>
              </ListItem>
            </ListItemButton>
            <ListItemButton sx={{ height: "40px" }}>
              <ListItem>
                <ListItemText>Last year</ListItemText>
              </ListItem>
            </ListItemButton>
            <ListItemButton sx={{ height: "40px" }}>
              <ListItem>
                <ListItemText>last 12 months</ListItemText>
              </ListItem>
            </ListItemButton>
            <ListItemButton sx={{ height: "40px" }}>
              <ListItem>
                <ListItemText>This month</ListItemText>
              </ListItem>
            </ListItemButton>
          </div>
        )}
        <div className="downpane-sec-div">
          <img className="graph-img" src={graphImg} alt="graph" />
        </div>
        <div className="downpane-third-div"></div>
      </div>
      <div className="left-downpane-div">
        <div className="left-downpane-fir-div">
          <h2>Payroll Distribution</h2>
          <div
            className="downpane-get-started"
            onClick={handleDropDown}
            style={{ border: dropDown ? "1px solid #0047cc" : null }}
          >
            <ListItem sx={{ padding: "5px 5px 5px 10px" }}>
              <ListItemText primary="Last 12 months" />
              <ListItemIcon onClick={handleDropDown}>
                {dropDown ? (
                  <ArrowDropUpIcon
                    sx={{ marginLeft: "20px" }}
                    style={{ color: dropDown ? "#0047cc" : "#8f8f8f" }}
                  />
                ) : (
                  <ArrowDropDownIcon sx={{ marginLeft: "20px" }} />
                )}
              </ListItemIcon>
            </ListItem>
          </div>
        </div>
        {dropDown && <Month />}

        <div className="leftpane-img-div">
          <img src={leftPaneImg} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default DownPane;
