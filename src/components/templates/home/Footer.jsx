// import React from 'react';
import styled from 'styled-components';
import { images } from '../../../assets/Images'
// import {
//     Twitter,
//     Instagram,
//     Facebook,
//     LinkedIn,
//     YouTube,
// } from '@material-ui/icons';
// import { colors } from '../../../assets/colors'
// import { Box, makeStyles } from '@material-ui/core'
// import Text from '../../Text'
// import Grid from '@material-ui/core/Grid'
// import Image from '../../Image'
// import { images } from '../../../assets/Images'
// import footerimage from '../../../assets/Images/Background.svg'
// import Logo from '../../../assets/Images/logo.svg'


// const useStyles = makeStyles((theme) => ({
//     text_header: {

//         fontSize: '25px',
//         [theme.breakpoints.down('sm')]: {
//             fontSize: '20px',
//             textAlign: 'center'
//         }
//     },
//     transactions: {
//         [theme.breakpoints.down('sm')]: {
//             marginLeft: '1em',
//             marginTop: '1em'


//         }
//     },
//     text: {
//         fontSize: '25px',
//         [theme.breakpoints.down('sm')]: {
//             fontSize: '20px',
//         }
//     }

// }));


// const DivFooter = styled.div`
//    background: url(${ footerimage});

//     @media (max-width: 768px) {

//   }

// `
// function Footer() {
//     return (
//         <DivFooter>
//             <div>
//                 <div>
//                     <Box>
//                         <Image src={Logo} />
//                         <h2>Skarpa</h2>
//                     </Box>
//                 </div>
//                 {
//                     [{
//                         image: logo,
//                         header: Skpar

//                     }]
//                 }

//             </div>



//         </DivFooter>
//     );
// }

// export default Footer;


// import React, { ReactNode } from 'react';
// import {
//     Twitter,
//     Instagram,
//     Facebook,
//     LinkedIn,
//     YouTube,
// } from '@material-ui/icons';
// import { Grid, Box, Link, Container } from '@material-ui/core';
// import Text from '../../atoms/Text';
// import { FooterStyle as Style } from './style';
// import { Logo } from '../../molecule';
import React, { ReactNode } from 'react';
import {
    Twitter,
    Instagram,
    Facebook,
    LinkedIn,
    YouTube,
} from '@material-ui/icons';
import { Grid, Box, Link, Container } from '@material-ui/core';
import Text from '../../Text'
import { colors } from '../../../assets/colors'

export const FooterStyle = styled.section`
  & {
    .header {
        justify-content: center;
          @media (min-width: 600px) {
        justify-content: flex-start;
      }
    }
    text-align: center;
    @media (min-width: 600px) {
      text-align: left;
    }

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    color: ${colors.white}  ;
    h6 {
      color: white;
      font-weight: 500;
      text-align: center;
    }

    p {
      color: ${colors.white}  ;
      font-weight: 300;
      opacity: 0.7;
      font-size: 0.8rem;
    }
  }
`;
const { LOGO } = images
const Footer = () => (

    < FooterStyle>
        <Container>
            <Grid container alignItems="flex-start">
                {[
                    {
                        head: (
                            <>
                                <img src={require(`../../../../public${LOGO}`)} />
                                <Text variant="subtitle1">Skarpa</Text>
                            </>
                        ),
                        list: [
                            { text: 'About us', href: '#' },
                            { text: 'News', href: '#' },
                            { text: 'Careers', href: '#' },
                        ],
                        component: ({ text, href }) => (
                            <Link color="inherit" href={`/${href}`}>
                                <Text variant="body1">{text}</Text>
                            </Link>
                        ),
                    },
                    {
                        head: <Text variant="subtitle1">Help and Support</Text>,
                        list: [
                            { text: 'FAQ', href: '#' },
                            { text: 'Contact us', href: '#' },
                            { text: 'Partner with Us', href: '#' },
                        ],
                        component: ({ text, href }) => (
                            <Link color="inherit" href={`/${href}`}>
                                <Text variant="body1">{text}</Text>
                            </Link>
                        ),
                    },
                    {
                        head: <Text variant="subtitle1">Legal</Text>,
                        list: [
                            { text: 'Terms and conditions', href: '#' },
                            { text: 'Privacy policy', href: '#' },
                            { text: 'Cookies policy', href: '#' },
                        ],
                        component: ({ text, href }) => (
                            <Link color="inherit" href={`/${href}`}>
                                <Text variant="body1">{text}</Text>
                            </Link>
                        ),
                    },
                    {
                        head: <Text variant="subtitle1"> Social</Text>,
                        list: [
                            { text: Twitter, href: '#' },
                            { text: Facebook, href: '#' },
                            { text: Instagram, href: '#' },
                            { text: LinkedIn, href: '#' },
                            { text: YouTube, href: '#' },
                        ],
                        display: 'inline-block',
                        margin: '.7rem 1.3rem 0 0',
                        component: ({ text: Comp, href }) => (
                            <Link color="inherit" href={`/${href}`}>
                                <Comp />
                            </Link>
                        ),
                    },
                ].map((item, index) => (
                    <Grid item md={3} sm={6} xs={12} key={index}>
                        <FooterNav
                            Head={item.head}
                            list={item.list}
                            display={item.display}
                            margin={item.margin}
                            component={item.component}
                        />
                    </Grid>
                ))}
            </Grid>
            <Text margin="4rem 0 0" variant="body1" fontWeight="300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                quibusdam, dolores ut provident velit omnis reprehenderit sunt, ex
                explicabo, cum atque perferendis possimus nihil commodi nulla facere
                mollitia ipsam deserunt? Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Odio ipsum sequi commodi eveniet laborum beatae facere
                quo. Quasi commodi laudantium ipsum, magnam ex officia, perspiciatis
                libero nisi provident obcaecati earum?
      </Text>
        </Container>
    </FooterStyle>
);

const FooterNav = ({
    Head,
    list,
    display = 'block',
    margin = '.7rem 0',
    component,
}) => (
        <>
            <Box display="flex" className="header" alignItems="center" height="5rem">
                {Head}
            </Box>
            {list.map((item, index) => (
                <Box display={display} margin={margin} key={index}>
                    {component(item)}
                </Box>
            ))}
        </>
    );

export default Footer;
