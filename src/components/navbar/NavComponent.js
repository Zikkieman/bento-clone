import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  useScrollTrigger,
  Slide
} from "@mui/material";
import { DrawerComp } from "./DrawerComponent";
import {Outlet, Link} from "react-router-dom"

export const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const trigger = useScrollTrigger();
  return (
    <div className="div-nav">
      {/* <Slide appear={false} direction="down" in={!trigger}> */}
      {/* <Container maxWidth="sm" fluid> */}
        <AppBar className={isMatch ? "30px" : "div-app"} position="sticky" elevation={0} sx={{ background: "#f5f6fa",  paddingTop: "15px",  }}>
          <Toolbar >
            <Link className="home-link" to="/">
            <Typography
              sx={{
                color: "#000e29",
                fontSize: "30px",
                // fontFamily: "ubuntu",
                // fontWeight: "600"
              }}
            >
              bento
            </Typography>
            </Link>
            {isMatch ? (
              <>
                <DrawerComp />
              </>
            ) : (
              <>
              <Link to="/sign-in" className="signin-link">
                <Button
                  variant="text"
                  className="signin-butt"
                  sx={{ color: "#000e29", fontSize: "14px", padding: "5px 20px", borderRadius: "25px" }}
                >
                  Sign In
                </Button>
                </Link>
                <Link to="/accttype" className="signup-link">
                <Button
                className="signin-butt"
                  variant="contained"
                  sx={{
                    
                    background: "#0047cc",
                    borderRadius: "25px",
                  }}
                >
                  GET STARTED
                </Button>
                </Link>
              </>
            )}
          </Toolbar>
        </AppBar>
        < Outlet />
      {/* </Container> */}
      {/* </Slide> */}
    </div>
  );
};
