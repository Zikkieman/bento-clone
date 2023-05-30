import "./TabStyles.css";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import icon from "../../images/asset 1.png";
import tab1 from "../../images/asset 2.png";
import tab2 from "../../images/asset 5.png";
import tab3 from "../../images/asset 6.png";
import download1 from "../../images/asset 3.png";
import download2 from "../../images/asset 4.png";
import { useMediaQuery, useTheme } from "@mui/material";

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{ borderBottom: 3, borderColor: "#90a0c2", marginBottom: "50px" }}
      >
        {isSmall ? (
          <>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
              TabIndicatorProps={{
                style: { background: "#0047cc", height: 4 },
              }}
            >
              <Tab
                sx={{ marginRight: "40px", color: "#90a0c2" }}
                label="Pay"
                {...a11yProps(0)}
              />
              <Tab
                sx={{ marginRight: "40px", color: "#90a0c2" }}
                label="Inclusive"
                {...a11yProps(1)}
              />
              <Tab
                sx={{ marginRight: "40px", color: "#90a0c2" }}
                label="people"
                {...a11yProps(2)}
              />
            </Tabs>
          </>
        ) : (
          <>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
              TabIndicatorProps={{
                style: { background: "#0047cc", height: 4 },
              }}
            >
              <Tab
                sx={{ color: "#90a0c2" }}
                label="Pay By Bento"
                {...a11yProps(0)}
              />
              <Tab
                sx={{ color: "#90a0c2" }}
                label="Inclusive By Bento"
                {...a11yProps(1)}
              />
              <Tab
                sx={{ color: "#90a0c2" }}
                label="people by bento"
                {...a11yProps(2)}
              />
            </Tabs>
          </>
        )}
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container>
          {isSmall ? (
            <>
              <Grid item sx={12} sm={12} md={6}>
                <div className="tab-div">
                  <h1 className="tab-headword">
                    Handling payroll & benefits has never been easier
                  </h1>
                  <p className="tab-p">
                    Manage salaries & taxes for employees across Africa. Offer
                    pension, benefits & insurance without hassle.
                  </p>
                  <Grid item sx={12} sm={12} md={6}>
                    <img
                      className="tab-pic"
                      src={tab1}
                      alt="tab-img"
                      style={{ marginLeft: "-3px" }}
                    />
                  </Grid>
                  <ul className="tab-list">
                    <li className="lists">
                      <img src={icon} alt="icon" className="list-icon" />
                      Set up, review, and run company-wide payroll within
                      minutes
                    </li>

                    <li className="lists">
                      {" "}
                      <img src={icon} alt="icon" className="list-icon" /> Remit
                      tax, pensions and contributions seamlessy
                    </li>

                    <li className="lists">
                      <img src={icon} alt="icon" className="list-icon" />
                      Pay remote employees while staying compliant to local laws
                    </li>

                    <li className="lists">
                      <img src={icon} alt="icon" className="list-icon" />
                      Stay on top of your financial data with detailed analytics
                    </li>
                  </ul>
                  </div>
                  <button className="tab-butt" style={{marginBottom: "20px"}}>
                    Get Started <span className="tab-span">&gt;</span>
                  </button>
              </Grid>
            </>
          ) : (
            <>
              <Grid item sx={12} sm={12} md={6}>
                <div className="tab-div">
                  <h1 className="tab-headword">
                    Handling payroll & benefits has never been easier
                  </h1>
                  <p className="tab-p">
                    Manage salaries & taxes for employees across Africa. Offer
                    pension, benefits & insurance without hassle.
                  </p>
                  <ul className="tab-list">
                    <li className="lists">
                      <img src={icon} alt="icon" className="list-icon" />
                      Set up, review, and run company-wide payroll within
                      minutes
                    </li>

                    <li className="lists">
                      {" "}
                      <img src={icon} alt="icon" className="list-icon" /> Remit
                      tax, pensions and contributions seamlessy
                    </li>

                    <li className="lists">
                      <img src={icon} alt="icon" className="list-icon" />
                      Pay remote employees while staying compliant to local laws
                    </li>

                    <li className="lists">
                      <img src={icon} alt="icon" className="list-icon" />
                      Stay on top of your financial data with detailed analytics
                    </li>
                  </ul>
                  <button className="tab-butt">
                    Get Started <span className="tab-span">&gt;</span>
                  </button>
                </div>
              </Grid>
              <Grid item sx={12} sm={12} md={6}>
                <img className="tab-pic" src={tab1} alt="tab-img" />
              </Grid>
            </>
          )}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container>
          {isSmall ? (
            <>
              <Grid item sx={12} sm={12} md={6}>
                <div className="tab-div">
                  <h1 className="tab-headword2">
                    Unlock a world of possibilities for your domestic workers{" "}
                  </h1>
                  <p className="tab-p">
                    Do more for your domestic staff by giving them access to
                    savings, investments, insurance, pensions & credit.
                  </p>

                  <Grid item sx={12} sm={12} md={6}>
                    <img
                      className="tab-pic"
                      src={tab2}
                      alt="tab-img"
                      style={{ marginLeft: "-3px" }}
                    />
                  </Grid>
                  <ul className="tab-list">
                    <li className="lists">
                      <img src={icon} alt="icon" className="list-icon" />
                      Set up, review, and run company-wide payroll within
                      minutes
                    </li>

                    <li className="lists">
                      {" "}
                      <img src={icon} alt="icon" className="list-icon" /> Remit
                      tax, pensions and contributions seamlessy
                    </li>

                    <li className="lists">
                      <img src={icon} alt="icon" className="list-icon" />
                      Pay remote employees while staying compliant to local laws
                    </li>

                    <li className="lists">
                      <img src={icon} alt="icon" className="list-icon" />
                      Stay on top of your financial data with detailed analytics
                    </li>
                  </ul>
                  <img
                    className="download"
                    src={download1}
                    alt="download img"
                  />
                  <img
                    className="download2"
                    src={download2}
                    alt="download img"
                  />
                </div>
              </Grid>
            </>
          ) : (
            <>
              <Grid item sx={12} sm={12} md={6}>
                <div className="tab-div">
                  <h1 className="tab-headword2">
                    Unlock a world of possibilities for your domestic workers{" "}
                  </h1>
                  <p className="tab-p">
                    Do more for your domestic staff by giving them access to
                    savings, investments, insurance, pensions & credit.
                  </p>
                  <ul className="tab-list">
                    <li className="lists">
                      <img src={icon} alt="icon" className="list-icon" />
                      Set up, review, and run company-wide payroll within
                      minutes
                    </li>

                    <li className="lists">
                      {" "}
                      <img src={icon} alt="icon" className="list-icon" /> Remit
                      tax, pensions and contributions seamlessy
                    </li>

                    <li className="lists">
                      <img src={icon} alt="icon" className="list-icon" />
                      Pay remote employees while staying compliant to local laws
                    </li>

                    <li className="lists">
                      <img src={icon} alt="icon" className="list-icon" />
                      Stay on top of your financial data with detailed analytics
                    </li>
                  </ul>
                  <img
                    className="download"
                    src={download1}
                    alt="download img"
                  />
                  <img
                    className="download2"
                    src={download2}
                    alt="download img"
                  />
                </div>
              </Grid>

              <Grid item sx={12} sm={12} md={6}>
                <img className="tab-pic" src={tab2} alt="tab-img" />
              </Grid>
            </>
          )}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container>
          {isSmall ? (
            <>
              <Grid item sx={12} sm={12} md={6}>
                <div className="tab-div">
                  <h1 className="tab-headword2">
                    Hire, onboard, and manage talent in Africa without hassle
                  </h1>
                  <p className="tab-p">
                    Create jobs, onboard employees, and track & manage
                    perfomance with our holistic, easy-to-use HR solution.{" "}
                  </p>
                  <Grid item sx={12} sm={12} md={6}>
                    <img
                      className="tab-pic"
                      src={tab3}
                      alt="tab-img"
                      style={{ marginLeft: "-3px" }}
                    />
                  </Grid>
                  <ul className="tab-list">
                    <li className="lists">
                      <img src={icon} alt="icon" className="list-icon" />
                      Create & automate a seamless hiring & onboarding process
                      for your full-time staff and contractors
                    </li>

                    <li className="lists">
                      {" "}
                      <img src={icon} alt="icon" className="list-icon" /> Easily
                      manage leave requests & PTO across your organisation
                    </li>

                    <li className="lists">
                      <img src={icon} alt="icon" className="list-icon" />
                      Ignite perfomance for every employee with goals &
                      appraisals
                    </li>

                    <li className="lists">
                      <img src={icon} alt="icon" className="list-icon" />
                      Improve staff productivity with effective shift &
                      attendance tracking
                    </li>
                  </ul>
                  <button className="tab-butt" style={{padding: "10px auto", margin: " auto"}}>Get Started</button>
                </div>
              </Grid>
            </>
          ) : (
            <>
              <Grid item sx={12} sm={12} md={6}>
                <div className="tab-div">
                  <h1 className="tab-headword2">
                    Hire, onboard, and manage talent in Africa without hassle
                  </h1>
                  <p className="tab-p">
                    Create jobs, onboard employees, and track & manage
                    perfomance with our holistic, easy-to-use HR solution.{" "}
                  </p>
                  <ul className="tab-list">
                    <li className="lists">
                      <img src={icon} alt="icon" className="list-icon" />
                      Create & automate a seamless hiring & onboarding process
                      for your full-time staff and contractors
                    </li>

                    <li className="lists">
                      {" "}
                      <img src={icon} alt="icon" className="list-icon" /> Easily
                      manage leave requests & PTO across your organisation
                    </li>

                    <li className="lists">
                      <img src={icon} alt="icon" className="list-icon" />
                      Ignite perfomance for every employee with goals &
                      appraisals
                    </li>

                    <li className="lists">
                      <img src={icon} alt="icon" className="list-icon" />
                      Improve staff productivity with effective shift &
                      attendance tracking
                    </li>
                  </ul>
                  <button className="tab-butt">Get Started</button>
                </div>
              </Grid>

              <Grid item sx={12} sm={12} md={6}>
                <img className="tab-pic" src={tab3} alt="tab-img" />
              </Grid>
            </>
          )}
        </Grid>
      </TabPanel>
    </Box>
  );
}
