import React from 'react';
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { colors } from '../../../assets/colors'
import { Box, makeStyles } from '@material-ui/core'
import Text from '../../Text'
import Grid from '@material-ui/core/Grid'
import Princetrend from '../../../assets/Images/Pricetrend.svg'
import Image from '../../Image'
import { images } from '../../../assets/Images'
import btc from '../../../assets/Images/btc.png'
import eth from '../../../assets/Images/eth.png'
import flower from '../../../assets/Images/flower.png'
import graph from '../../../assets/Images/graph.png'


 
const useStyles = makeStyles((theme) => ({
    text_header: {

        fontSize: '30px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '25px'
        }
    },
    text_subtitle: {
        fontSize: '25px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',

        }
    },
    card: {
        height: '4em'
    }

}));

const Pricetrend = styled.div`
    background: url(${Princetrend});
    background-position: center;
    width: 80%;
    margin: 0 auto;
    margin-top: 8rem;


`

const Trends = [{
    image: btc,
    header: 'Bitcoin',
    text: 'BTC 0.12',
    span: '+4.20',
    

},
    {
    image: eth,
    header: 'Ethereum',
        text: 'ETH 0.12',
        span: '+4.25',


    },
    {
    image: flower,
    header: 'ION',
        text: 'ION 0.12',
        span: '+4.50',


    }]
function PriceTrend() {
    const classes = useStyles();
    return (
        <Pricetrend>
            <Box>
                <Box>
                    <Text color={colors.lightblue} variant='h4'
                        fontWeight='bold'
                        className={classes.text_header}   >
                        Lastest price trend
                          </Text>

                    <Text
                        variant='subtitle1'  marginTop='2em'>
                        Today, 18th july 2019
                            </Text>
                </Box>
                <Box marginTop='1em'>
                    <Grid container spacing={5}>
                        {
                            Trends.map(item => {
                                return (
                                    <Grid item  sm ={9}md={7} lg={4}>
                                        <Card className={classes.card} >
                                            <CardContent>
                                                <Grid container justifyContent='space-evenly'>
                                                    <Grid item sm={3} lg={2}>
                                                        <Image src={item.image}  height='2em' width='2em'/>
                                                    </Grid>

                                                    <Grid item lg={4} justifyContent='flex-start'>
                                                        
                                                        <Text variant='h5' fontWeight='bold' fontSize='15px' >{item.header}</Text>
                                                        <Box display='flex' alignItems='flex-end'>
                                                            <Text variant='subtitle1' color={colors.blue} fontWeight='bold' >{item.text}</Text>
                                                            <Text variant='subtitle1' color={colors.blue} fontSize='11px' margin='4px' >{item.span}</Text>
                                                            
                                                        </Box>
                                                            
                                                        
                                                     
                                                    </Grid>
                                                   

                                                    <Grid item lg={6}>
                                                        <Box display='flex' justifyContent='flex-end'>
                                                            <Image src={graph} />
                                                        </Box>
                                                        
                                                    </Grid>


                                                </Grid>



                                            </CardContent>

                                        </Card>
                                    </Grid>
                                )

                            })
                        }

                    </Grid>
                </Box>
               
            </Box>

        </Pricetrend>
    );
}

export default PriceTrend;




