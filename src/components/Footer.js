import React from 'react';
import { Container } from "@material-ui/core";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";



const Footer = () => {
    return (
        <>
            <Container>
                <LinkedInIcon fontSize="large" color="success" />
                <FacebookIcon fontSize="large" color="secondary" />
            </Container>
        </>
    );
    
}

export default Footer;