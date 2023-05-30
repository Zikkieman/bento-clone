import * as React from "react";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import AppleIcon from "@mui/icons-material/Apple";
import "./AccStyles.css";

export const SimpleAccordion = () => (
  <div className="acc-div">
    <Grid container>
      <Grid item>
        <div style={{ marginRight: "50px" }}>
          <div>
            <h1>bento</h1>
            <p>Bento mobile is available on</p>
            <span className="fifth-download">
              <ListItem>
                <ListItemIcon sx={{ marginRight: "-25px" }}>
                  <AdbIcon sx={{color: "#fff"}}/>
                </ListItemIcon>
                <ListItemText primary="Andriod" />
              </ListItem>
            </span>
            <span className="fifth-download fifth-second-download">
              <ListItem>
                <ListItemIcon sx={{ marginRight: "-25px" }}>
                  <AppleIcon sx={{color: "#fff"}}/>
                </ListItemIcon>
                <ListItemText primary="IOS" />
              </ListItem>
            </span>
          </div>
        </div>
      </Grid>

      <div>
        <Grid container spacing={4}>
          <Grid item sm={12} md={6} lg={3}>
            <Accordion
              disableGutters={true}
              sx={{
                "&:before": {
                  display: "none",
                },
                backgroundColor: "inherit",
                color: "#fff",
                marginRight: "50px",
              }}
              elevation={0}
              className="main-acc"
            >
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h2 style={{ fontSize: "1.2rem" }}>Bussiness</h2>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Pay</Typography>
                <Typography>People</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <Accordion
              disableGutters={true}
              sx={{
                "&:before": {
                  display: "none",
                },
                backgroundColor: "inherit",
                color: "#fff",
                marginRight: "50px",
              }}
              elevation={0}
              className="main-acc"
            >
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h2 style={{ fontSize: "1.2rem" }}>Personal</h2>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Inclusive</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <Accordion
              disableGutters={true}
              sx={{
                "&:before": {
                  display: "none",
                },
                backgroundColor: "inherit",
                color: "#fff",
                marginRight: "50px",
              }}
              elevation={0}
              className="main-acc"
            >
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h2 style={{ fontSize: "1.2rem" }}>Resources</h2>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Blog</Typography>
                <Typography>Terms of Use</Typography>
                <Typography>Privacy policy</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <Accordion
              disableGutters={true}
              sx={{
                "&:before": {
                  display: "none",
                },
                backgroundColor: "inherit",
                color: "#fff",
                marginRight: "50px",
              }}
              elevation={0}
              className="main-acc"
            >
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h2 style={{ fontSize: "1.2rem" }}>Contact</h2>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>info@bento.africa</Typography>
                <FacebookIcon  />
                <TwitterIcon />
                <LinkedInIcon />
                <InstagramIcon />
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </div>
    </Grid>
  </div>
);
