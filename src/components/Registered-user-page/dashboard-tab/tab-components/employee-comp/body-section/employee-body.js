import "./employees-body.scss";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Eyes from "../employeeImg/Screenshot 2023-06-30 at 18.02.24.png";

function EmployeeBody() {
  const [value, setValue] = useState(0);
  const [searchColor, setSearchColor] = useState(false);

  const handleChangeColor = () => {
    setSearchColor(true);
  };

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style = {
    color: "#8f8f8f",
  };

  return (
    <div
      className="EB-main-div"
      onClick={() => {
        setSearchColor(false);
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            sx={{
              ".Mui-selected": {
                color: `#000`,
              },
            }}
            value={value}
            onChange={handleChange}
            textColor="#8f8f8f"
            // indicatorColor="#000"
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#0047cc",
                height: "4px",
                fontSize: "0.8rem"
              },
            }}
          >
            <Tab label="Active Employees" sx={{fontSize: "0.75rem"}}/>
            <Tab label="Inactive Employees" sx={{fontSize: "0.75rem"}}/>
          </Tabs>
        </Box>
        <div >
          <input
          onClick={handleChangeColor}
            type="text"
            placeholder="Search..."
            style={{
              border: searchColor ? "1px solid #0047cc" : "1px solid #8f8f8f",
            }}
          />
          <SearchIcon className="BH-search-icon" style={{color : searchColor ?  "#8f8f8f" :  "#0047cc"}}/>
        </div>

        <TabPanel value={value} index={0}>
          <div className="EB-tabpanel">
            <img src={Eyes} alt="Employee" />
            <p>There are no employees on your payroll yet</p>
          </div>
        </TabPanel>

        <TabPanel value={value} index={1}>
        <div className="EB-tabpanel">
            <img src={Eyes} alt="Employee" />
            <p>You do not have any inactive employee</p>
          </div>
        </TabPanel>
        <div className="EB-below-panel">
          <p>Click the button below to start adding employees.</p>
          <div className="EB-div">Invite Employees</div>
        </div>
      </Box>
    </div>
  );
}

export default EmployeeBody;
