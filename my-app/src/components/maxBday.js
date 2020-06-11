import React from 'react';
import './maxBday.css';
import pic from './dk-4.png';
import {Container, Image} from 'react-bootstrap';

const maxBday = () => {
    return (
        <Container>
        <Container className="headerBday">

        </Container>
        <Container className="css-typing2">
        <p>
            <h1>you're invited😈</h1>
        </p>
        <p>
            <b>What:</b> Max's Birthday
        </p>
        <p>
            <b>When:</b> June 13th 2020 3pm-evening
        </p>
        <p>
            <b>Where:</b> Meet at San Elijo State Beach
        </p>  
        <p style={{marginTop: 20}}>
            After the beach we'll head up to
        </p>
        <p>
            the new house where larry and chelle 
        </p>
        <p>
            are gonna be grilling us cardiff crack!
        </p>
        <p>
            Late night it's DK time 😈 
        </p>
        <p>
            <Container className="dk">
                <Image className="pic1" src={pic} alt="love" />
            </Container>
        </p>
        </Container>
        </Container>
        );
}
export default maxBday;