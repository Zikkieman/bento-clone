import { useState } from "react";
import "./NavStyles.css";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export const DrawerComp = () => {
  const [drawerState, setDrawerState] = useState(false);

  const handleDrawerState = () => {
    setDrawerState(!drawerState);
  };

  return (
    <>
      <Drawer
        className="drawer-div"
        open={drawerState}
        onClick={handleDrawerState}
        anchor="right"
      >
        <div className="first-drawer-div">
          <Link to="/sign-in">
            <button className="first-button">Sign In</button>
          </Link>
        </div>

        <div className="second-drawer-div">
          <Link to="/sign-up">
            <button className="second-button">Get Started</button>
          </Link>
        </div>
      </Drawer>
      <IconButton onClick={handleDrawerState} sx={{ marginLeft: "auto" }}>
        <MenuIcon />
      </IconButton>
      ;
    </>
  );
};
