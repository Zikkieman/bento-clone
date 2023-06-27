import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import "./down-pane.scss"
function Month() {
  return (
    <div className="month-div">
      <ListItemButton sx={{height: "40px"}}>
        <ListItem>
          <ListItemText>This year</ListItemText>
        </ListItem>
      </ListItemButton>
      <ListItemButton sx={{height: "40px"}}>
        <ListItem>
          <ListItemText>Last year</ListItemText>
        </ListItem>
      </ListItemButton>
      <ListItemButton sx={{height: "40px"}}>
        <ListItem>
          <ListItemText>last 12 months</ListItemText>
        </ListItem>
      </ListItemButton>
      <ListItemButton sx={{height: "40px"}}>
        <ListItem>
          <ListItemText>This month</ListItemText>
        </ListItem>
      </ListItemButton>
    </div>
  );
}


export default Month;