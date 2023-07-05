import { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import "./payroll-header.scss"

let month;
let style = {};
function getMonth() {
  const year = new Date();
  const currentMonth = year.getMonth() + 1;

  if (currentMonth === 1) {
    month = "January";
  } else if (currentMonth === 2) {
    month = "Febuary";
  } else if (currentMonth === 3) {
    month = "March";
  } else if (currentMonth === 4) {
    month = "April";
  } else if (currentMonth === 5) {
    month = "May";
  } else if (currentMonth === 6) {
    month = "June";
  } else if (currentMonth === 7) {
    month = "July";
  } else if (currentMonth === 8) {
    month = "August";
  } else if (currentMonth === 7) {
    month = "September";
  } else if (currentMonth === 7) {
    month = "October";
  } else if (currentMonth === 7) {
    month = "November";
  } else if (currentMonth === 7) {
    month = "December";
  }
  return month;
}
export default getMonth;


export const SelectedListItem = () => {
  const year = new Date();
  const currentMonth = year.getMonth();
  const [selectedIndex, setSelectedIndex] = useState(currentMonth);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
      <Box className="current-month-div" sx={{ width: "130%", maxWidth: 200, boxShadow: "0 0 3px", borderRadius : "5px",}} style={{maxHeight: 300, overflow: 'auto'}}>
        <List>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
            sx={{ padding: "5px 0 5px 5px" }}
          >
            <ListItemText
              primary="January"
              primaryTypographyProps={{
                fontSize: "0.8rem",
                fontWeight: "600",
                color: "#373636",
              }}
            />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
            sx={{ padding: "5px 0 5px 5px" }}
          >
            <ListItemText
              primary="Febuary"
              primaryTypographyProps={{
                fontSize: "0.8rem",
                fontWeight: "600",
                color: "#373636",
              }}
            />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
            sx={{ padding: "5px 0 5px 5px" }}
          >
            <ListItemText
              primary="March"
              primaryTypographyProps={{
                fontSize: "0.8rem",
                fontWeight: "600",
                color: "#373636",
              }}
            />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
            sx={{ padding: "5px 0 5px 5px" }}
          >
            <ListItemText
              primary="April"
              primaryTypographyProps={{
                fontSize: "0.8rem",
                fontWeight: "600",
                color: "#373636",
              }}
            />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
            sx={{ padding: "5px 0 5px 5px" }}
          >
            <ListItemText
              primary="May"
              primaryTypographyProps={{
                fontSize: "0.8rem",
                fontWeight: "600",
                color: "#373636",
              }}
            />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}
            sx={{ padding: "5px 0 5px 5px" }}
          >
            <ListItemText
              primary="June"
              primaryTypographyProps={{
                fontSize: "0.8rem",
                fontWeight: "600",
                color: "#373636",
              }}
            />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 6}
            onClick={(event) => handleListItemClick(event, 6)}
            sx={{ padding: "5px 0 5px 5px" }}
          >
            <ListItemText
              primary="July"
              primaryTypographyProps={{
                fontSize: "0.8rem",
                fontWeight: "600",
                color: "#373636",
              }}
            />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 7}
            onClick={(event) => handleListItemClick(event, 7)}
            sx={{ padding: "5px 0 5px 5px" }}
          >
            <ListItemText
              primary="August"
              primaryTypographyProps={{
                fontSize: "0.8rem",
                fontWeight: "600",
                color: "#373636",
              }}
            />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 8}
            onClick={(event) => handleListItemClick(event, 8)}
            sx={{ padding: "5px 0 5px 5px" }}
          >
            <ListItemText
              primary="September"
              primaryTypographyProps={{
                fontSize: "0.8rem",
                fontWeight: "600",
                color: "#373636",
              }}
            />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 9}
            onClick={(event) => handleListItemClick(event, 9)}
            sx={{ padding: "5px 0 5px 5px" }}
          >
            <ListItemText
              primary="October"
              sx={{ fontSize: "18rem" }}
              primaryTypographyProps={{
                fontSize: "0.8rem",
                fontWeight: "600",
                color: "#373636",
              }}
            />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 10}
            onClick={(event) => handleListItemClick(event, 10)}
            sx={{ padding: "5px 0 5px 5px" }}
          >
            <ListItemText
              primary="November"
              primaryTypographyProps={{
                fontSize: "0.8rem",
                fontWeight: "600",
                color: "#373636",
              }}
            />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 11}
            onClick={(event) => handleListItemClick(event, 11)}
            sx={{ padding: "5px 0 5px 5px" }}
          >
            <ListItemText
              primary="December"
              primaryTypographyProps={{
                fontSize: "0.8rem",
                fontWeight: "600",
                color: "#373636",
              }}
            />
          </ListItemButton>
        </List>
      </Box>
  );
};
