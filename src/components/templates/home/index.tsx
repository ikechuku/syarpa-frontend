import React from 'react';
import styled from 'styled-components'
import  Header from './Header';
import Tradingoptions from './tradingoptions';
import Transactions from './Transactions';
import SyarpaDebit from './SyarpaDebit';
import BitSyarpa from './BitSyarpa';
import Navbar from './Navbar';
import Footer from './Footer';
import SendCrypto from './SendCrypto';
import PriceTrend from './PriceTrend';

import mobilefooter from '../../../assets/Images/mobilefooter.svg'
import footer from '../../../assets/Images/footer.svg'
import { Container} from '@material-ui/core';


export const FooterBg = styled.div`
    background-image: url(${mobilefooter});
    background-repeat: no-repeat;
    height: 1050px;
    background-size: cover;
    overflow: hidden;
    padding: 0 0 2rem;
    width: 100%;
    & > div {
      height: 100%;
    }
    @media (min-width: 600px) { 
      background-image: url(${footer});
      
      background-position-x: -.15rem;
      height: 600px;
      
    }
    @media (min-width: 600px) {
      height: 500px;

    }
    @media (max-with: 768px){
        width: 50%;
    }
`;

function Landingpage() {
    return (
        <div>
            <Navbar />
            <Header />
            <Tradingoptions />
            <Transactions />
            <BitSyarpa />

            <SyarpaDebit />
            <PriceTrend />
            <SendCrypto />  
            <FooterBg>
                <Container>
                    <Footer />
                </Container>
            </FooterBg>
            
        </div>
    );
}

export default Landingpage;