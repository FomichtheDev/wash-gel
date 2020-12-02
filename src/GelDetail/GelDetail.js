import React, {useEffect} from 'react';
import classes from './gel_detail.module.css';
import {Container} from "@material-ui/core";
import {useSelector} from "react-redux";
import {useParams} from "react-router";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {NavLink} from "react-router-dom";


function GelDetail(props) {
    const Gels = useSelector(state => state.gels);
    const {id} = useParams();

    const findGel = (id) => {
        for (let i = 0; i < Gels.length; i++) {
            if (Gels[i].id === id) {
                return Gels[i];
            }
        }
    };

    const setPhoto = e => {
        // document.getElementById(`${e.target.id}`).classList.add('active');
        document.getElementById('main_photo').src = (e.target.getAttribute('src'))
    };

    let currentGel = findGel(Number(id));


    return (
        <section className={classes.gel_detail}>
            <Container>
                <Grid container>
                    <Grid container alignItems='center'>
                        <Grid item md={2}>
                            <Grid container className={classes.photos_side_bar} direction='column'>
                                <Grid item className={`${classes.side_photo} ${classes.photo}`}>
                                    <img id='first_photo'
                                         onClick={setPhoto}
                                         src={currentGel.img1}
                                         alt="gel"/>
                                </Grid>
                                <Grid item className={`${classes.side_photo} ${classes.photo}`}>
                                    <img id='second_photo'
                                         onClick={setPhoto}
                                         src={currentGel.img2}
                                         alt="gel"/>
                                </Grid>
                                <Grid item className={`${classes.side_photo} ${classes.photo}`}>
                                    <img id='third_photo'
                                         onClick={setPhoto}
                                         src={currentGel.img3}
                                         alt="gel"/>
                                </Grid>
                                <Grid item className={`${classes.side_photo} ${classes.photo}`}>
                                    <img id='fourth_photo'
                                         onClick={setPhoto}
                                         src={currentGel.img4}
                                         alt="gel"/>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item md={3} className={classes.main_photo}>
                            <img id='main_photo' src={currentGel.img1} alt="gel"/>
                        </Grid>
                        <Grid item md={7}>
                            <Grid container direction='column' className={classes.description}>
                                <h2>Характеристики:</h2>
                                <Grid container className={classes.params} justify='center'>
                                    <Grid item md={8}>
                                        <Paper elevation={6} className={classes.paper}>

                                            <Grid item className={classes.param}>
                                                <span>Название</span><span>{currentGel.name}</span>
                                            </Grid>
                                            <Grid item className={classes.param}>
                                                <span>Тип </span><span>{currentGel.type}</span>
                                            </Grid>
                                            <Grid item className={classes.param}>
                                                <span>Объём </span><span>{currentGel.v}Л</span>
                                            </Grid>
                                            <Grid item className={classes.param}>
                                                <span>Цена </span><span>{currentGel.discountPrice ? currentGel.discountPrice : currentGel.price}грн.</span>
                                            </Grid>


                                        </Paper>
                                    </Grid>
                                </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid container justify='center'>
                        <Grid item md={9} className={classes.description_p}>
                            <h2>Описание: </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi distinctio
                                dolorum error est ex, fugit, illum impedit ipsa itaque libero minima minus optio
                                possimus quisquam repellendus saepe soluta vel.
                            </p>
                        </Grid>
                        <Grid item>
                            <h2>Как сделать заказ или связаться с нами?</h2>
                            <p>Наши контакты вы можете найти в разделе "Контакты", или же нажав сюда <NavLink to='/how-to-make-an-order'>Как сделать заказ?</NavLink></p>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )

};


export default GelDetail;