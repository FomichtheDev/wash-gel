import React, {useCallback, useMemo} from 'react';
import classes from './contacts.module.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from "@material-ui/core/Container";
import {Controller, useForm} from "react-hook-form";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "react-bootstrap";



const useStyles = makeStyles({
        root: {
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
            fontWeight: '400',
            letterSpacing: '2px',
        },
    });




function Contacts() {

    const { register, handleSubmit, errors, formState} = useForm();
    const { isDirty, dirtyFields,touched } = formState;


    const isEmpty = useCallback(obj => {
        for(let key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }, []);

    const allChecked = () => {
        return Object.keys(dirtyFields).length === 4;
    };



    const bg = allChecked() && isEmpty(errors) ? '#4caf50' : '#f44336';

    const style = useStyles();


    const onSubmit = data => console.log(data); //TODO



    return (


        <section className={classes.contacts}>
            <Container className={classes.center}>
                <Typography variant="h6" gutterBottom>
                    Связаться с нами
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={3} justify="center">
                        <Grid container>
                            <Grid item xs={12} md={6} className={classes.p}>
                                <TextField
                                    name="name"
                                    label="Имя"
                                    inputRef={register({required: true, minLength: 3})}
                                    fullWidth
                                    required
                                    error={errors.name}

                                />
                                {errors.name?.type === "minLength" && <p className={classes.error}>Длина</p>}
                            </Grid>
                            <Grid item xs={12} md={6} className={classes.p}>
                                <TextField
                                    name="surname"
                                    label="Фамилия"
                                    required
                                    inputRef={register({required: true, minLength: 3})}
                                    fullWidth
                                    error={errors.surname}
                                />
                                {errors.surname?.type === "minLength" && <p className={classes.error}>Длина</p>}
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} md={6} className={classes.p}>
                                <TextField
                                    name="phone"
                                    label="Номер телефона"
                                    inputRef={register({required: true, minLength: 10, maxLength: 12})}
                                    fullWidth
                                    required
                                    error={errors.phone}

                                />
                                {errors.phone?.type === "minLength" && <p className={classes.error}>Слишком короткий номер</p>}
                                {errors.phone?.type === "maxLength" && <p className={classes.error}>Слишком длинный номер</p>}
                            </Grid>
                            <Grid item xs={12} md={6} className={classes.p}>
                                <TextField
                                    name="email"
                                    label="E-mail"
                                    required
                                    inputRef={register({required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}
                                    fullWidth
                                    error={errors.email}
                                />
                                {errors.email?.type === "pattern" && <p className={classes.error}>Некорректный адрес</p>}
                            </Grid>
                        </Grid>
                        <Grid container className={classes.text}>
                            <TextField
                                id="standard-multiline-static"
                                name="message"
                                label="Сообщение"
                                multiline
                                fullWidth
                                rows={4}
                                defaultValue="Ваше сообщение"
                                inputRef={register({required: true})}
                                error={errors.message}
                            />
                        </Grid>

                    </Grid>




                    <Button type="submit" style={{backgroundColor: bg}} className={style.root}>Отправить</Button>
                </form>

            </Container>
        </section>

    )


};


export default Contacts;