import { useState, useContext } from "react";
import { UserContext } from "../../../../context/user.context";
import {
  AppBar,
  Typography,
  Toolbar,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DrawerComponent from "./drawer.component";
import "./navBoard.styles.scss";
import Topdrawer from "./top-drawer.component";
import { Link, Outlet } from "react-router-dom";


import NavDropdown from "./nav-dropdown/navDropdown.comp";

function DashNav() {



  const { userProfile } = useContext(UserContext);
  console.log(userProfile)

  // const {currentUser} = useContext(UserContext)
  // console.log(currentUser);


  const [dropDown, setDropDown] = useState(false);
  const [value, setValue] = useState();
  const handleTabChange = (event, value) => {
    setValue(value);
  };
  const theme = useTheme();
  // console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  function LinkTab(props) {
    // console.log(props);
    return (
      <Tab
        component={Link}
        //   onClick={(event) => {
        //     event.preventDefault();
        //   }}
        to={props.pathname}
        {...props}
      />
    );
  }

  return (
    <nav>
      <AppBar
        elevation={0}
        position="sticky"
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          borderBottom: 2,
          borderColor: "#5c6370",
        }}
      >
        <Toolbar sx={{ marginBottom: "-10px" }}>
         <Link to="/"><Typography>Bento</Typography></Link> 

          {isMatch ? (
            <>
              <DrawerComponent />
              <Topdrawer />
            </>
          ) : (
            <>
              {" "}
              <Divider
                orientation="vertical"
                flexItem
                sx={{ height: "25px", marginTop: "20px", marginLeft: "10px" }}
              />
              <Tabs
                value={value}
                onChange={handleTabChange}
                textColor="black"
                TabIndicatorProps={{
                  style: { background: "#0047cc", height: 4 },
                }}
              >
                <LinkTab
                  className="tab"
                  label="Dashboard"
                  selected
                  pathname="/dashboard"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "600",
                    opacity: "60%",
                  }}
                />
                <LinkTab
                  className="tab"
                  label="Employees"
                  pathname="/employee"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "600",
                    opacity: "60%",
                  }}
                />
                <LinkTab
                  className="tab"
                  label="Payroll"
                  pathname="/payroll"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "600",
                    opacity: "60%",
                  }}
                />
                <LinkTab
                  className="tab"
                  label="Remittances"
                  pathname="/remittances"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "600",
                    opacity: "60%",
                  }}
                />
                <LinkTab
                  className="tab"
                  label="Benefit"
                  pathname="/benefit"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "600",
                    opacity: "60%",
                  }}
                />
                <LinkTab
                  className="tab"
                  label="Vault"
                  pathname="/vault"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "600",
                    opacity: "60%",
                  }}
                />
              </Tabs>
              <div className="user-credentials">
                <div className="user-initials">
                  <span>{userProfile.email.slice(0,1).toUpperCase()}</span>
                </div>
                <div className="user-details">
                  <span className="user-name">{userProfile.displayName}</span>
                  <span className="user-company">{userProfile.companyName}</span>
                </div>
              </div>
              <div className="user-profile" onClick={handleDropDown}>
                {dropDown ? (
                  <ArrowDropUpIcon
                    sx={{ marginLeft: "2px", marginTop: "2px" }}
                  />
                ) : (
                  <ArrowDropDownIcon
                    sx={{ marginLeft: "2px", marginTop: "2px" }}
                  />
                )}

             
              </div>
              <div>   {dropDown && <NavDropdown />}</div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </nav>
  );
}

export default DashNav;
