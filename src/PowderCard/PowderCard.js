import React from 'react';
import classes from './poder-card.module.css'
import {Grid} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";


function PowderCard(props){
    return(
        <Grid item md={4} className={classes.card}>
            <Paper elevation={6}>
                <div className={classes.card}>
                    <div className={classes.gel_picture}>
                        <img src={props.img} alt={props.name}/>
                    </div>
                    <div className={classes.bg_white}>
                        <span className={classes.name}>{props.name}</span>
                        <span className={classes.type}>Тип: {props.type}</span>
                        <span className={classes.v}>Обьём: {props.weight}кг</span>
                        {props.discountPrice
                            ?
                            <div className={classes.prices}>
                                <span className={classes.price}>Цена:</span>
                                <span className={`${classes.price} ${classes.discount}`}> {props.price}</span>
                                <span>{props.discountPrice} грн.</span>
                            </div>
                            :
                            <span className={classes.price}>Цена: {props.price} грн.</span>
                        }
                    </div>
                    <button className={classes.buy}
                            onClick={() => props.history.push(`/powder/${props.name.toLowerCase()}/${props.id}`)}>Подробнее
                    </button>
                </div>
            </Paper>
        </Grid>

    )

};


export default PowderCard;