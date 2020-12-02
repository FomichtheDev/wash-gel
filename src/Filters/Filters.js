import React from 'react';
import classes from './filters.module.css';
import Checkbox from "../CheckBox/Checkbox";
import {useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import {NavLink} from "react-router-dom";

function Filters(props){

    const sortParams = useSelector(state => state.sortParams);


    return(
        <div className={classes.filter}>
            <Grid item className={classes.checkboxes} xs={6}>
                <Checkbox htmlFor='universal' label='Universal' checked={sortParams.universal}/>
                <Checkbox htmlFor='color' label='Color' checked={sortParams.color}/>
                <Checkbox htmlFor='for_kids' label='For Kids' checked={sortParams.for_kids}/>
                <Checkbox htmlFor='black' label='Black' checked={sortParams.black}/>
                <Checkbox htmlFor='white' label='White' checked={sortParams.white}/>
            </Grid>
            <Grid container xs={3} className={classes.drop_down_menu}>Filter
                <ul>
                    <li>
                        <NavLink
                            className={classes.link}
                            activeClassName={classes.active}
                            exact
                            to={props.asc}>По возрастанию цены
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={classes.link}
                            activeClassName={classes.active}
                            exact
                            to={props.desc}>По убванию цены
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={classes.link}
                            activeClassName={classes.active}
                            exact
                            to={props.alph}>По алфавиту
                        </NavLink>
                    </li>
                </ul>
            </Grid>
        </div>
    )

};


export default Filters;