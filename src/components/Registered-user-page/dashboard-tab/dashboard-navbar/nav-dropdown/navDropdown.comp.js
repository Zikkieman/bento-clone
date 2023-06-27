import "./navDropdown.scss"
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import PlaceIcon from '@mui/icons-material/Place';
import {
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
  } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../../../../context/user.context";
 


function NavDropdown() {

  const {userProfile} = useContext(UserContext)

  const {email, country, displayName, companyName } = userProfile
    return(
        <div className="dropdown-mian-div">
        <div >
            <div className="top-drawer-init">
          <div className="drawer-init">
            <span>{email.slice(0,1).toUpperCase()}</span>
            <div className="drawer-home-div">
              <HomeWorkIcon className="drawer-init-icon" />
            </div>
          </div>
          <div className="drawer-user-credentials" style={{marginTop: "-10px"}}>
            <h3>{displayName}</h3>
            <p>{email}</p>
          </div>
        </div>
        </div>
        <ListItemButton sx={{backgroundColor: "#f8f8f8"}}>
        <ListItemIcon sx={{ marginRight: "-25px" }}>
          <HomeWorkIcon sx={{ marginRight: "5px" }} />
        </ListItemIcon>
        <ListItemText
          primary={companyName}
          primaryTypographyProps={{
            fontSize: "0.8rem",
            color: "gray",
          }}
        />
      </ListItemButton>
      <ListItemButton sx={{backgroundColor: "#f8f8f8"}}>
        <ListItemIcon sx={{ marginRight: "-25px" }}>
          <PlaceIcon sx={{ marginRight: "5px" }} />
        </ListItemIcon>

        <Divider />

        <ListItemText
          primary={country}
          primaryTypographyProps={{
            fontSize: "0.8rem",
            color: "gray",
          }}
        />
      </ListItemButton>
      <Divider />
      <ListItemButton >
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
      </div>
    )
}

export default NavDropdown;