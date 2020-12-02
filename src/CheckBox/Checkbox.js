import React from 'react';
import classes from './checkbox.module.css'
import {setSortParams} from "../actions/actions";
import {useDispatch} from "react-redux";


function Checkbox(props){

    const dispatch = useDispatch();

    return(
        <div className={classes.checkbox}>
            <input type="checkbox" id={props.htmlFor} checked={props.checked} onChange={() => dispatch(setSortParams(props.htmlFor))}/>
            <label htmlFor={props.htmlFor}>{props.label}</label>
        </div>
    )

};


export default Checkbox