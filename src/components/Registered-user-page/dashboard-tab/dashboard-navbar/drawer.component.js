import { useState } from "react";
import "./navBoard.styles.scss";

import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
} from "@mui/material";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawerState = () => {
    setOpenDrawer(false);
  };
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={handleDrawerState}
        PaperProps={{ style: { width: "100%" } }}
      >
        <div>
          <AppBar
            elevation={0}
            position="sticky"
            sx={{ background: "#fff", color: "#000", marginBottom: "20px" }}
          >
            <Toolbar>
              <h2 style={{ color: "#000e29" }}>Bento</h2>

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
        </div>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  color: "#0047cc",
                }}
              >
                <Link
                  to="/dashboard"
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => {
                    setOpenDrawer(!openDrawer);
                  }}
                >
                  Dashboard
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <Divider />
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon className="expanded-icon" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  color: "#000",
                  opacity: "60%",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                }}
              >
                <Link
                  to="/employee"
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => {
                    setOpenDrawer(!openDrawer);
                  }}
                >
                  Employees
                </Link>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  marginBottom: "20px",
                  color: "#000000",
                  opacity: "50%",
                  fontSize: "0.9rem",
                }}
              >
                View employees
              </Typography>
              <Typography
                sx={{
                  marginBottom: "20px",
                  color: "#000000",
                  opacity: "50%",
                  fontSize: "0.9rem",
                }}
              >
                Invite employees
              </Typography>
              <Typography
                sx={{
                  marginBottom: "20px",
                  color: "#000000",
                  opacity: "50%",
                  fontSize: "0.9rem",
                }}
              >
                Department
              </Typography>
              <Typography
                sx={{
                  marginBottom: "20px",
                  color: "#000000",
                  opacity: "50%",
                  fontSize: "0.9rem",
                }}
              >
                Payment groups
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon className="expanded-icon" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  color: "#000",
                  opacity: "60%",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                }}
              >
                <Link
                  to="/payroll"
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => {
                    setOpenDrawer(!openDrawer);
                  }}
                >
                  Payroll
                </Link>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  marginBottom: "20px",
                  color: "#000000",
                  opacity: "50%",
                  fontSize: "0.9rem",
                }}
              >
                Create Policy
              </Typography>
              <Typography
                sx={{
                  marginBottom: "20px",
                  color: "#000000",
                  opacity: "50%",
                  fontSize: "0.9rem",
                }}
              >
                Payroll history
              </Typography>
              <Typography
                sx={{
                  marginBottom: "20px",
                  color: "#000000",
                  opacity: "50%",
                  fontSize: "0.9rem",
                }}
              >
                Payroll analytics
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Divider variant="full-width" />
          <ListItemButton>
            <ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "0.8rem",
                  fontWeight: "600",
                }}
              >
                <Link
                  to="/remittances"
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => {
                    setOpenDrawer(!openDrawer);
                  }}
                >
                  Remittances
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <Divider variant="full-width" />
          <ListItemButton>
            <ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "0.8rem",
                  fontWeight: "600",
                }}
              >
                <Link
                  to="/benefit"
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => {
                    setOpenDrawer(!openDrawer);
                  }}
                >
                  Benefit
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <Divider variant="full-width" />
          <ListItemButton>
            <ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "0.8rem",
                  fontWeight: "600",
                }}
              >
                <Link
                  to="/vault"
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => {
                    setOpenDrawer(!openDrawer);
                  }}
                >
                  Vault
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <Divider variant="full-width" />
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "#000" }}
        onClick={() => {
          setOpenDrawer(true);
        }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerComponent;
