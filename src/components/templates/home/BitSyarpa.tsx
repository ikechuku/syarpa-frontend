import React from "react";
import styled from "styled-components";
import { colors } from "../../../assets/colors";
import { Box, makeStyles } from "@material-ui/core";
import Text from "../../Text";
import Grid from "@material-ui/core/Grid";
import Image from "../../Image";
import card from "../../../assets/Images/card.png";
import { images } from "../../../assets/Images";

const useStyles = makeStyles((theme) => ({
  text_header: {
    fontSize: "30px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      textAlign: "left",
    },
  },

  text_subtitle: {
    fontSize: "23px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
}));

const Bitsyarpa = styled.div`
  width: 95%;
`;
function BitSyarpa() {
  const classes = useStyles();
  return (
    <Bitsyarpa>
      <Box style={{ marginTop: "8em" }}>
        <Grid container justifyContent="center" sm={12} spacing={3}>
          <Grid item xs={10} md={12} lg={3}>
            <Text
              color={colors.lightblue}
              variant="h4"
              fontWeight="bold"
              className={classes.text_header}
            >
              Why BitSyarpa
            </Text>

            <Text
              variant="subtitle1"
              marginTop="2em"
              width="80%"
              color={colors.gray}
            >
              There are so many reasons to <br /> choose Syarpa and here are
              some <br /> of them
            </Text>
          </Grid>
          <Grid item xs={9} md={4} lg={2}>
            <Box textAlign="center">
              <Image src={card} />
            </Box>
            <Text
              variant="h5"
              textAlign="center"
              color={colors.lightblue}
              className={classes.text_subtitle}
            >
              Multiple Currencies
            </Text>
            <Text variant="subtitle1" textAlign="center" color={colors.grey}>
              Syarpa supports the NGN, <br />
              GBP and EUR and will soon be adding more
            </Text>
          </Grid>
          <Grid item xs={9} md={4} lg={2}>
            <Box textAlign="center">
              <Image src={card} />
            </Box>
            <Text
              variant="h5"
              textAlign="center"
              color={colors.lightblue}
              className={classes.text_subtitle}
            >
              Low Fees
            </Text>
            <Text variant="subtitle1" textAlign="center" color={colors.grey}>
              Transact in crypto and fiat
              <br /> currencies with other Syarpa
              <br /> users at the lowest fees
            </Text>
          </Grid>
          <Grid item xs={9} md={4} lg={2}>
            <Box textAlign="center">
              <Image src={card} />
            </Box>
            <Text
              variant="h5"
              textAlign="center"
              color={colors.lightblue}
              className={classes.text_subtitle}
            >
              Secure
            </Text>
            <Text variant="subtitle1" textAlign="center" color={colors.grey}>
              Rest assured of the safety of <br />
              your funds from internal and <br />
              third-party threats.
            </Text>
          </Grid>
        </Grid>
      </Box>
    </Bitsyarpa>
  );
}

export default BitSyarpa;
