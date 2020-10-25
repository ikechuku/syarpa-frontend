import * as React from "react";
import { colors } from "../../../assets/colors";
import { images } from "../../../assets/Images";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Text from "../../Text";
import Grid from "@material-ui/core/Grid";
// import Button from '../../Button';
import Image from "../../Image";
import headerimage from "../../../assets/Images/Headerimage.svg";
// import headerlogo from "../../../assets/Images/headerlogo.png";

const { PHONE_IMAGE } = images;

const useStyles = makeStyles((theme) => ({
  hero: {},
  text: {
    fontSize: "30px",
    lineHeight: "1em",
    overflow: "hidden",

    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
    },
  },
  textsubtitle: {
    fontSize: "19px",
    lineHeight: "1em",
    marginTop: "2em",
    color: colors.blue,
  },
}));

const StyledHeader = styled.div`
  background-image: url(${headerimage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 1em;
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
  .hero {
    margin: 5em;
  }
  .bg-phone {
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 100%;

    .bg-phone {
      margin: 0;
      margin-top: 5em;
      margin-right: 5em;
      width: 0 auto;
      width: 100%;
    }
  }

  @media (max-width: 425px) {
    background-image: none;
    width: 100%;

    .hero {
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    .bg-phone {
      margin: 0;
      margin-top: 5em;
      margin-right: 5em;
      width: 0 auto;
      width: 100%;
    }
  }
`;
const HomeHeader = () => {
  const classes = useStyles();
  return (
    <StyledHeader>
      <Box className="hero" display="flex" justifyContent="space-around">
        <Grid container>
          <Grid item sm={12} md={6}>
            <Box m="auto" marginTop="4em">
              <Grid item sm={12} md={9}>
                <Text
                  className={classes.text}
                  fontWeight="800"
                  margin="0 0 2rem"
                  color={colors.blue}
                  variant="h2"
                >
                  <Box display="flex" flexDirection="column">
                    Buy, sell and manage <br />
                    cryptocurrency securely
                    {/* <Image src={headerlogo} height="0.5em" width="1em" /> */}
                  </Box>
                </Text>

                <Text
                  margin="0 0 2rem"
                  color={colors.blue}
                  variant="h6"
                  fontWeight="300"
                  lineHeight="1.6rem"
                  fontSize="19px"
                  className={classes.textsubtitle}
                >
                  Create and grow your cryptocurrency <br />
                  portfolio with Syarpa
                </Text>
              </Grid>

              <Box display="flex">
                {/* <Grid container spacing={3}> */}

                {/* <Grid item xs={6}sm={6} md={4} lg={3}> */}

                <button
                  style={{
                    backgroundColor: `${colors.peach}`,
                    color: `${colors.white}`,
                    width: "10em",
                    height: "40px",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  Get Started
                </button>
                {/* </Grid> */}
                {/* <Grid item xs={6}sm={6} md={4} lg={3}> */}
                <button
                  style={{
                    backgroundColor: `${colors.blue}`,
                    color: `${colors.white}`,
                    width: "10em",
                    height: "40px",
                    marginLeft: "1rem",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  Login
                </button>
                {/* </Grid> */}

                {/* </Grid> */}
              </Box>
            </Box>
          </Grid>

          <Grid item sm={12} md={6}>
            <Box className="bg-phone">
              <Image
                src={require(`../../../../public${PHONE_IMAGE}`)}
                height="30em"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </StyledHeader>
  );
};

export default HomeHeader;
