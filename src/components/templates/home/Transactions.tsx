import React from "react";
import styled from "styled-components";
import { colors } from "../../../assets/colors";
import { Box, makeStyles, useTheme } from "@material-ui/core";
import Text from "../../Text";
import Grid from "@material-ui/core/Grid";
import Image from "../../Image";
import { images } from "../../../assets/Images";
import Transaction from "../../../assets/Images/crypto.svg";

const useStyles = makeStyles((theme) => ({
  text_header: {
    fontSize: "30px",
    [theme.breakpoints.down("md")]: {
      marginTop: "2em",
      textAlign: "left",
      marginLeft: "1em",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      marginLeft: 0,
    },
  },
  transactions: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1em",
      marginTop: "1em",
    },
  },
  text: {
    fontSize: "23px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      marginTop: "1em",
    },
  },

  subtitle: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      margin: "0 auto",
      width: "100%",
      color: colors.blue,
    },
  },

  header: {
    [theme.breakpoints.down("sm")]: {
      MarginTop: "3em",
      margin: "0 auto",
    },
  },
  content: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "0 auto",
    },
  },
}));
const Trades = [
  {
    header: "Buy, Sell & Swap",
    text:
      "Trade popular digital currencies easily and instantly anywhere you are",
  },
  {
    header: "Peer to Peer",
    text: "Exchange currenceis on a network you can trust",
  },
  {
    header: "Link Wallets",
    text:
      "Store all your digital assets in one place and gain full control of your ",
  },
];

const Img = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const TransactionS = styled.div`
  width: 80%;

  @media (max-width: 425px) {
    width: 100%;
  }
`;
const Transactions = () => {
  const { ICON } = images;
  const classes = useStyles();

  return (
    <TransactionS>
      <Box
        marginTop="8rem"
        display="flex"
        justifyContent="center"
        textAlign="center"
        margin="0 auto"
        background-color="yellow"
        // className={classes.transaction}
      >
        {/* <Grid container justifyContent='center' alignItems='center' > */}
        <Box>
          {/* <Grid item xs={6} sm={6}> */}
          <Img>
            <Image src={Transaction} width="30rem" height="25rem" />
          </Img>

          {/* </Grid> */}
        </Box>
        <Box className={classes.header}>
          {/* <Grid item xs={6} sm={6}> */}
          <Box>
            <Text
              color={colors.lightblue}
              variant="h4"
              fontWeight="bold"
              className={classes.text_header}
            >
              Do more with Syarpa
            </Text>

            <Text
              variant="subtitle1"
              className={classes.subtitle}
              marginTop="0.52em"
              //   marginBottom="52em"
              color={colors.blue}
            >
              Syarpa has diverse features that give you the power to do <br />
              more with your cryptocurrency
            </Text>
          </Box>

          {/* </Grid> */}

          <Box className={classes.transactions} marginTop="2em">
            {Trades.map((item) => {
              return (
                <Box
                  display="flex"
                  flexDirection="row"
                  marginTop="1em"
                  className={classes.content}
                >
                  <div
                    style={{
                      backgroundColor: "#F7F8FF",
                      borderRadius: "50%",
                      height: "2rem",
                      width: "2em",
                      marginRight: "0.5em",
                    }}
                  ></div>
                  <Box textAlign="left">
                    <Text
                      variant="h4"
                      className={classes.text}
                      fontWeight="bold"
                      color={colors.lightblue}
                      fontSize="18px"
                    >
                      {item.header}
                    </Text>
                    <Text variant="subtitle1" color={colors.grey}>
                      {item.text}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* </Grid> */}
      </Box>
    </TransactionS>
  );
};

export default Transactions;
