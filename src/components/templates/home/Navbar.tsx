import * as React from "react";
import styled from "styled-components";
import { colors } from "../../../assets/colors";
import { images } from "../../../assets/Images";
import { Menu } from "@material-ui/icons";
import {
  Box,
  Link,
  IconButton,
  makeStyles,
  Hidden,
  useTheme,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Image from "../../Image";
import Text from "../../Text";
import Button from "../../Button";
import HomeDrawer from "./HomeDrawer";

const useStyles = makeStyles((theme) => ({
  transactions: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1em",
      marginTop: "1em",
    },
  },
  text: {
    fontSize: "25px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  Link: {
    color: `${colors.lightblack}`,
    textDecoration: "none",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  signup: {
    marginRight: "1em",
    color: `${colors.lightblack}`,
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  menu: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      alignItems: "flex-end",
    },
  },
  mobilemenu: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "5em",
    },
  },
  menumedia: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-end",
      alignItems: "flex-end",
      // backgroundColor: 'red'
    },
  },
}));
const Navhead = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 3em;
  over-flow: hidden;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

function Navbar() {
  const [isopen, setOpen] = React.useState(false);
  const classes = useStyles();
  const { LOGO, HEADERLOGO } = images;
  return (
    <Navhead>
      <Box>
        <Grid container sm={12}>
          <Grid item xs={2} sm={3}>
            <Box display="flex" alignItems="center" height="3em" m={1}>
              <Image src={require(`../../../../public${HEADERLOGO}`)} />
            </Box>
          </Grid>
          <Grid item xs={1} sm={6}>
            <Box
               
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              height="3em"
            >
              {["How it works", "Transfer Crypto", "Business", "Help"].map(
                (item) => {
                  return <Link className={classes.Link}>{item}</Link>;
                }
              )}
            </Box>
          </Grid>
          <Grid xs={9} sm={3}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="3em"
              className={classes.menumedia}
            >
              <Link className={classes.signup}>Sign up</Link>
              <Button
                variant="contained"
                color={colors.white}
                width="5em"
                height="2em"
              >
                Login
              </Button>

              <Box width="2.5rem" className={classes.menu}>
                <IconButton onClick={() => setOpen(true)}>
                  <Menu
                    color="inherit"
                    fontSize="large"
                    className={classes.mobilemenu}
                  />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Hidden mdUp>
        <HomeDrawer setOpen={setOpen} isopen={isopen} />
      </Hidden>
    </Navhead>
  );
}

export default Navbar;
