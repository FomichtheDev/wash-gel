import React from 'react';
import classes from './card.module.css';
import Paper from "@material-ui/core/Paper";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTshirt} from "@fortawesome/free-solid-svg-icons";


function Card(props){
    return(
        <Paper elevation={6} className={classes.card}>
            <h3>{props.name}</h3>

            <div className={classes.logo}>
                <FontAwesomeIcon icon={faTshirt} color={props.color}/>
            </div>
            <span className={classes.type}>{props.type}</span>
            <div className={classes.v}>Доступные обьёмы:
            <ul>
                {
                    props.v.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
            </div>

</Paper>
    )

};


export default Card;