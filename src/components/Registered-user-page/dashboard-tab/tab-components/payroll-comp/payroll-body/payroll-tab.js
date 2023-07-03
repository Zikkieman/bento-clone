import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Eyes from "../../employee-comp/employeeImg/Screenshot 2023-06-30 at 18.02.24.png";
import "./payroll-tab.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="PB-main-div">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
          <Tabs
            sx={{
              ".Mui-selected": {
                color: `#8f8f8f`,
              },
            }}
            value={value}
            onChange={handleChange}
            textColor="#8f8f8f"
            indicatorColor="#8f8f8f"
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#0047cc",
                height: "4px",
              },
            }}
          >
            <Tab label="NGN Payroll" sx={{ fontSize: "0.9rem" }} className="PB-tab" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <div className="PB-tabpanel">
            <img src={Eyes} alt="Payroll" />
            <p>There are no employees on your payroll yet</p>
          </div>
        </TabPanel>

        <div className="PB-below-panel">
          <p>Click the button below to start adding employees.</p>
          <div className="PB-div">Invite Employees</div>
        </div>
      </Box>
    </div>
  );
}

export default BasicTabs;
