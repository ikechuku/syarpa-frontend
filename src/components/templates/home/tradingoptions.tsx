import React from "react";
import styled from "styled-components";
import { colors } from "../../../assets/colors";
import { Box, makeStyles } from "@material-ui/core";
import Text from "../../Text";
import Button from "../../Button";
import Grid from "@material-ui/core/Grid";
import Image from "../../Image";
import card from "../../../assets/Images/card.png";

const useStyles = makeStyles((theme) => ({
  text_header: {
    fontSize: "30px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
    },
  },
  text_subtitle: {
    fontSize: "25px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  Image: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "1em",
    },
  },
}));

const TradingOptions = styled.div`
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
`;
function Tradingoptions() {
  const classes = useStyles();
  return (
    <TradingOptions>
      <Box style={{ marginTop: "8rem" }}>
        <Text
          color={colors.lightblue}
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          className={classes.text_header}
        >
          Start trading instantly
        </Text>

        <Text
          color={colors.blue}
          variant="subtitle1"
          textAlign="center"
          marginTop="0.51em"
        >
          Exchange the most popular crytocurrencies for fiat
        </Text>

        <Box marginTop="3em">
          <Grid container justifyContent="space-evenly" spacing={6}>
            <Grid item sm={12} md={3}>
              <Box textAlign="center">
                <Image src={card} />
              </Box>

              <Text
                variant="h5"
                textAlign="center"
                color={colors.lightblue}
                className={classes.text_subtitle}
              >
                Sign up
              </Text>
              <Text variant="subtitle1" textAlign="center" color={colors.grey}>
                Create your free <br />
                Syarpa wallet in a few <br />
                simple steps
              </Text>
            </Grid>
            <Grid item sm={12} md={3}>
              <Box textAlign="center">
                <Image src={card} />
              </Box>
              <Text
                variant="h5"
                textAlign="center"
                color={colors.lightblue}
                className={classes.text_subtitle}
              >
                Add a payment method
              </Text>
              <Text variant="subtitle1" textAlign="center" color={colors.grey}>
                Send money to your <br /> Syarpa wallet throuogh <br />
                bank transfer or credit card
              </Text>
            </Grid>
            <Grid item sm={12} md={3}>
              <Box textAlign="center">
                <Image src={card} />
              </Box>
              <Text
                variant="h5"
                textAlign="center"
                color={colors.lightblue}
                className={classes.text_subtitle}
              >
                Buy and sell
              </Text>
              <Text variant="subtitle1" textAlign="center" color={colors.grey}>
                Buy crypto, store in <br /> your wallet, sell to <br />
                others and send to friends
              </Text>
            </Grid>
          </Grid>
        </Box>

        <Box textAlign="center" mt={3}>
          <button
            style={{
              backgroundColor: `${colors.peach}`,
              color: `${colors.white}`,
              width: "16em",
              height: "40px",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Create Your Wallet Now
          </button>
        </Box>
      </Box>
    </TradingOptions>
  );
}

export default Tradingoptions;
