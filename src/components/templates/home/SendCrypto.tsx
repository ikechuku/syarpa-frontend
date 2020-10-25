import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../assets/colors'
import { Box, makeStyles } from '@material-ui/core'
import Text from '../../Text'
import Grid from '@material-ui/core/Grid'
import Image from '../../Image'
import { images } from '../../../assets/Images'
import download from '../../../assets/Images/Download.png'
import appstore from '../../../assets/Images/Appstore.svg'
import googlestore from '../../../assets/Images/googleplay_icon.svg'

const useStyles = makeStyles((theme) => ({
    sellCrypto: {
        margin: '0 auto',

    },
    stores: {
        [theme.breakpoints.up('md')]: {
            marginTop: '2em',

        }
    }

}));
const Sendcrypto = styled.div`
   background: url(${ download});
   background-size: cover;
   background-repeat: no-repeat;
   height: 14rem;
   width: 80%;
   border-radius: 1em;
   margin: 0 auto;
   margin-top:  8rem;
   margin-bottom: 3rem;

    @media (max-width: 425px) {
    width: 100%;
    height: 17rem;
    margin-top:  5rem;
     h3{
        font-size: 21px;
    }
    h5{
        margin-top: 0.5em;
        font-size: 19px;
    }
    .image{
        margin: 0 auto;
        margin-top: 0.5em;
        margin-left: 5em;
    }
  }


`
function SendCrypto() {
    const classes = useStyles();
    return (
        <Sendcrypto>
            <Box className={classes.sellCrypto} display='flex' flexDirection='column' alignItems='center'  >
                <Text variant='h3' fontSize='27px' textAlign='center' color={colors.white} marginTop='1.5em' >Send and receive crypto on the go with Syarpa</Text>
                <Text variant='h5' fontSize='19px' textAlign='center' color={colors.white}>Start trading today</Text>
                <Box className={classes.stores}>
                    <Grid container justifyContent='center' spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Image src={appstore} height='3rem' className='image' />
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <Image src={googlestore} height='3rem' className='image'/>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </Sendcrypto>
    );
}

export default SendCrypto;
