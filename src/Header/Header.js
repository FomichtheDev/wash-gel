import React, {useEffect, useState} from 'react';
import classes from './header.module.css'
import {Container} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Link, NavLink} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import {useDispatch, useSelector} from "react-redux";
import BackDrop from "../BackDrop/BackDrop";
import {toggleMenu} from "../actions/actions";

function Header() {

    const isOpen = useSelector(state => state.menuStatus);
    const [scrolled, setScrolled] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
       window.addEventListener('scroll', handleScroll)
    });

    const handleScroll = () => {
        const offset = window.scrollY;

        offset > 100 && setScrolled(true);
    };


    const links = [
        {
            to: '/',
            label: 'Домашняя страница',
            exact: true
        },
        {
            to: '/gel',
            label: 'Гель',
            exact: false
        },
        {
            to: '/soap',
            label: 'Мыло',
            exact: false
        },
        {
            to: '/washing-powder',
            label: 'Стиральный порошок',
            exact: false
        },
        {
            to: '/softener',
            label: 'Кондиционер',
            exact: false
        },
        {
            to: '/private-label',
            label: 'Частная ТМ',
            exact: false
        },
        {
            to: '/contacts',
            label: 'Контакты',
            exact: false
        },
        {
            to: '/order',
            label: 'Как заказать?',
            exact: false
        },

    ];

    const mapLinks = () => {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink activeClassName={classes.active} exact={link.exact} to={link.to} target='_blank'>{link.label}</NavLink>
                </li>

            )
        })
    };

    const styles = [classes.nav];
    const icon = [classes.menu];
    const headerStyles = [classes.header];

    if (!isOpen) styles.push(classes.close);
    else icon.push(classes.opened);

    if(scrolled) headerStyles.push(classes.scrolled);


    return (
        <header className={headerStyles.join(' ')}>
            <Container maxWidth={false} component='div' className={classes.line}>
                <Grid container justify='center'>
                    <nav className={styles.join(' ')}>
                        <ul>
                            {mapLinks()}
                        </ul>
                    </nav>
                    <Grid className={icon.join(' ')} onClick={() => dispatch(toggleMenu())}>
                        {
                            isOpen ? <FontAwesomeIcon icon={faTimes} color='white'/> : <FontAwesomeIcon icon={faBars} color='white'/>
                        }
                    </Grid>
                    <Grid item className={classes.brand}>
                        <Link to="/">Wash-Gel</Link>
                    </Grid>
                </Grid>


                {
                    isOpen && <BackDrop />
                }
            </Container>
        </header>
    )

};


export default Header;