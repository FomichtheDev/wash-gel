import React from 'react';
import classes from './footer.module.css';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";


function Footer(){

    const copyright = () => {

        let year = new Date().getFullYear();

        return <small>Copyright   &copy; {year} Kh.Gel. All rights reserved</small>
    };


    return(
        <footer className={classes.footer}>
            <Container component='div'>
                <Grid container direction='column' spacing={4} alignItems='center'>
                    <Grid item><NavLink to='/contacts'>Контакты</NavLink></Grid>
                    <Grid item className={classes.instagram}>
                        <a href="https://www.instagram.com/lampaled_ua/" target='_blank'>
                            <FontAwesomeIcon icon={faInstagram} color='white'/>
                        </a>
                    </Grid>
                    <Grid item>{copyright()}</Grid>
                </Grid>
            </Container>
        </footer>
    )

};


export default Footer;