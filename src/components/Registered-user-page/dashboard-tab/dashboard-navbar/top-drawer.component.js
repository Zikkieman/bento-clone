import {
  AppBar,
  Drawer,
  Typography,
  IconButton,
  Toolbar,
  ListItemButton,
  ListItemIcon,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { useContext, useState } from "react";
import "./navBoard.styles.scss";
import ClearIcon from "@mui/icons-material/Clear";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import { UserContext } from "../../../../context/user.context";
import PlaceIcon from '@mui/icons-material/Place';
import { signOutUser } from "../../../../utils/firebase/firebase.utils";


function Topdrawer() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const {userProfile} = useContext(UserContext)
  const {setCurrentUser} = useContext(UserContext)

  function handleTopDrawer() {
    setOpenDrawer(!openDrawer);
  }

  const handleSignOutUser = async () => {
    await signOutUser;
    setCurrentUser(null);
  };

  return (
    <div>
      <Drawer
        anchor="top"
        open={openDrawer}
        PaperProps={{ style: { height: "45%" } }}
      >
        <AppBar
          elevation={0}
          position="sticky"
          sx={{ color: "#000", background: "#fff" }}
        >
          <Toolbar>
            <IconButton
              sx={{ marginLeft: "auto" }}
              onClick={() => {
                setOpenDrawer(!openDrawer);
              }}
            >
              <ClearIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <div className="top-drawer-init">
          <div className="drawer-init">
            <span>{userProfile.email.slice(0,1).toUpperCase()}</span>
            <div className="drawer-home-div">
              <HomeWorkIcon className="drawer-init-icon" />
            </div>
          </div>
          <div className="drawer-user-credentials">
            <h3>{userProfile.displayName}</h3>
            <p>{userProfile.email}</p>
          </div>
        </div>
        <ListItemButton sx={{ height: "50px" }}>
          <ListItemIcon sx={{ marginRight: "-25px" }}>
            <HomeWorkIcon sx={{ marginRight: "5px" }} />
          </ListItemIcon>
          <ListItemText
            primary={userProfile.companyName}
            primaryTypographyProps={{
              fontSize: "0.8rem",
              color: "gray",
            }}
          />
        </ListItemButton>
        <Divider />
        <ListItemButton sx={{ height: "50px" }}>
          <ListItemIcon sx={{ marginRight: "-25px" }}>
            <PlaceIcon sx={{ marginRight: "5px" }} />
          </ListItemIcon>
          <ListItemText
            primary={userProfile.country}
            primaryTypographyProps={{
              fontSize: "0.8rem",
              color: "gray",
            }}
          />
        </ListItemButton>
        <Divider />
        <ListItemButton sx={{ height: "50px" }} onClick={handleSignOutUser}>
          <ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "1rem",
                color: "gray",
              }}
            >
              Sign Out
            </ListItemText>
          </ListItemIcon>
        </ListItemButton>
      </Drawer>
      <div className="user-credential">
        <div onClick={handleTopDrawer} className="user-initial">
          <span>{userProfile.email.slice(0,1).toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
}

export default Topdrawer;
