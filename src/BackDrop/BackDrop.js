import React from 'react';
import classes from './backdrop.module.css';
import {useDispatch} from "react-redux";
import {toggleMenu} from "../actions/actions";

function BackDrop(){
    const dispatch = useDispatch();



    return(
        <div onClick={() => dispatch(toggleMenu())} className={classes.backDrop}>

        </div>
    )

};


export default BackDrop;