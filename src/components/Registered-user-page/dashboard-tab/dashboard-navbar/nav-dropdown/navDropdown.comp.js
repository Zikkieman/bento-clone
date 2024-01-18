import "./navDropdown.scss";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import PlaceIcon from "@mui/icons-material/Place";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../../../../context/user.context";
import { signOutUser } from "../../../../../utils/firebase/firebase.utils";

function NavDropdown() {
  const { userProfile } = useContext(UserContext);
  const { setCurrentUser } = useContext(UserContext);

  const { email, country, displayName, company } = userProfile;

  const handleSignOutUser = async () => {
    await signOutUser;
    setCurrentUser(null);
  };

  return (
    <div className="dropdown-mian-div">
      <div>
        <div className="top-drawer-init">
          <div className="drawer-init">
            <span>{email.slice(0, 1).toUpperCase()}</span>
            <div className="drawer-home-div">
              <HomeWorkIcon className="drawer-init-icon" />
            </div>
          </div>
          <div
            className="drawer-user-credentials"
            style={{ marginTop: "-10px" }}
          >
            <h3>{displayName}</h3>
            <p>{email}</p>
          </div>
        </div>
      </div>
      <ListItemButton>
        <ListItemIcon sx={{ marginRight: "-25px" }}>
          <HomeWorkIcon sx={{ marginRight: "5px" }} />
        </ListItemIcon>
        <ListItemText
          primary={company}
          primaryTypographyProps={{
            fontSize: "0.8rem",
            color: "gray",
          }}
        />
      </ListItemButton>

      <Divider />

      <ListItemButton>
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
      <ListItemButton onClick={handleSignOutUser}>
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
  );
}

export default NavDropdown;
