import React from "react";
import styled from "styled-components";
import { colors } from "../../../assets/colors";
import { images } from "../../../assets/Images";
import { Box, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Image from "../../Image";
import Text from "../../Text";
import headerlogo from "../../../assets/Images/headerlogo.png";

const useStyles = makeStyles((theme) => ({
  text_header: {
    fontSize: "30px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      textAlign: "left",
      marginTop: "2em",
    },
  },
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
}));
const Debitsyarpa = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    margin-top: 2em;
    background-color: "red";
  }
`;
function SyarpaDebit() {
  const { DEBITCARD } = images;
  const classes = useStyles();
  return (
    <div>
      <Box style={{ marginTop: "8em" }}>
        <Grid container justifyContent="center" sm={12} md={12} spacing={2}>
          <Grid item sm={12} md={6} lg={3}>
            <Box textAlign="center">
              <Image
                src={require(`../../../../public${DEBITCARD}`)}
                width="300px"
              />
            </Box>
          </Grid>

          <Grid item xs={10} sm={9} md={5} lg={3}>
            <Debitsyarpa>
              <Text
                color={colors.lightblue}
                variant="h4"
                fontWeight="bold"
                className={classes.text_header}
              >
                <Box display="flex" flexDirection="column">
                  Syarpa Debit Card
                  {/* <Image src={headerlogo} height='0.5em' width='1em' /> */}
                </Box>
              </Text>
              <Text variant="subtitle1" color={colors.blue}>
                Crypto everywhere you go
              </Text>
              <Text variant="subtitle1" marginTop="1.42em" color={colors.grey}>
                With the Syarpa Debit Mastercard, you can spend your fiat and{" "}
                <br /> converted cryptocurrency online and in-store in millions
                of locations <br /> worldwide. All you have to do is fund it
              </Text>
            </Debitsyarpa>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default SyarpaDebit;
