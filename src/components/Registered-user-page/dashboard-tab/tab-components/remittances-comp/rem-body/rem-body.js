import "./rem-body.scss";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { UserContext } from "../../../../../../context/user.context";
import data from "./rem-data";
import { Grid, Item } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  //   const { userProfile } = useContext(UserContext);
  //   const {country} = userProfile

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function RemBody() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
              marginTop: "-15px",
            },
          }}
        >
          <Tab
            label="Nigeria"
            sx={{ fontSize: "0.85rem" }}
            className="RB-tab"
          />
        </Tabs>
      </Box>
      <div className="grid-div">
        {data.map((data, index) => {
          return (
            <div>
              <div item key={index} className="card-div">
                <div className="card-first-div">
                  <img src={data.Image} alt="clock" />
                </div>
                <div className="card-second-div">
                  <div className="upper-div">{data.state}</div>
                  <h2>{data.headword}</h2>
                  <p>{data.text}</p>
                  <div className="lower-div">{data.info}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Box>
  );
}
