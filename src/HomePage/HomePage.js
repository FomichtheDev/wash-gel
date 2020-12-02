import React from 'react';
import classes from './homepage.module.css';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {faBacterium, faHandSparkles, faPumpSoap, faSmile, faTshirt, faWind} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Paper from "@material-ui/core/Paper";
import Card from "../Card/Card";

function HomePage() {
    return (
        <section className={classes.homepage}>
            {/*<Container maxWidth={false}>*/}
            <div className={classes.hwo}>
                <Container>
                    <Grid item>
                        <h1>Делаем вашу жизнь чище</h1>
                        <p>Уже много лет занимаемся производством и дистрибьюцией бытовой химии</p>
                    </Grid>
                </Container>
            </div>
            <div className={classes.why}>
                <Container>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <h2>Почему именно мы?</h2>
                            <p>Текст примерно такого размера как мы долго работаем и какие мы классные Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit. Amet, asperiores, commodi eius expedita harum id
                                impedit labore maiores maxime molestias.</p>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className={classes.gel}>
                <Container maxWidth={false}>
                    <Grid container spacing={6}>
                        <Grid item xs={7}>
                            <div className={classes.video}>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/LXb3EKWsInQ"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="gel"
                                />
                            </div>
                        </Grid>
                        <Grid container xs={5} alignItems="center">
                            <Grid item>
                            <h2>Гель</h2>
                            <p>
                                Купить гель важная информация Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.
                                A aliquam amet corporis cumque deserunt dicta doloremque eligendi esse, et, eveniet
                                itaque laudantium nobis nostrum omnis quasi quisquam ratione, vel veniam.
                            </p>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.cards} justify='space-around'>
                            <Grid item sm={2}>
                                <Card color="#8e65c0" v={['1L', '4,3L', '5L', '10L', 'ОПТ']} type="Универсальный"/>
                            </Grid>
                            <Grid item sm={2}>
                                <Card color="white" v={['1L', '4,3L', '5L', '10L', 'ОПТ']} type="Для Белого"/>
                            </Grid>
                            <Grid item sm={2}>
                                <Card color="black" v={['1L', '4,3L', '5L', '10L', 'ОПТ']} type="Для Чёрного"/>
                            </Grid>
                            <Grid item sm={2}>
                                <Card color="#f0c2f0" v={['1L', '4,3L', '5L', '10L', 'ОПТ']} type="Детский"/>
                            </Grid>
                            <Grid item sm={2}>
                                <Card color="#f5d572" v={['1L', '4,3L', '5L', '10L', 'ОПТ']} type="Для цветного"/>
                            </Grid>
                        </Grid>

                    </Grid>
                </Container>
            </div>
            <div className={classes.soap}>
                <Container maxWidth={false}>
                    <Grid container>
                        <Grid container xs={5} alignItems="center">
                            <Grid item>
                                <h2>Мыло</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque commodi debitis excepturi fuga fugiat illum impedit iusto maxime nam nemo nobis pariatur qui saepe, sit sunt, tenetur totam ut.</p>
                            </Grid>
                        </Grid>
                        <Grid container xs={7}>
                            <Grid item xs={12}>
                                <div className={classes.soap_video}>
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/LXb3EKWsInQ"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="soap"
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container justify="space-between" className={classes.soap_advantages}>
                        <Grid item className={classes.li}>
                            <FontAwesomeIcon icon={faPumpSoap} />
                            <h6>Правильная конститенция</h6>
                        </Grid>
                        <Grid item className={classes.li}>
                            <FontAwesomeIcon icon={faHandSparkles} />
                            <h6>Нежные руки</h6>
                        </Grid>
                        <Grid item className={classes.li}>
                            <FontAwesomeIcon icon={faWind} />
                            <h6>Приятный запах</h6>
                        </Grid>
                        <Grid item className={classes.li}>
                            <FontAwesomeIcon icon={faSmile} />
                            <h6>Хорошее настроение</h6>
                        </Grid>
                        <Grid item className={classes.li}>
                            <FontAwesomeIcon icon={faBacterium} />
                            <h6>100% чистота</h6>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className={classes.dish_wash}>
                <Container maxWidth={false}>
                    <Grid container spacing={6} justify='center'>
                        <Grid item xs={12}>
                            <h2>Моющее для посуды</h2>
                        </Grid>
                        <Grid item xs={8}>
                            <div className={classes.video}>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/LXb3EKWsInQ"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="gel"
                                />
                            </div>
                        </Grid>
                        <Grid container xs={8} justify='center' direction='column' alignItems='center'>
                            <Grid item xs={12} justify='center'>
                                <h2>Моющее для посуды</h2>
                                <p>
                                    Купить гель важная информация Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                    A aliquam amet corporis cumque deserunt dicta doloremque eligendi esse, et, eveniet
                                    itaque laudantium nobis nostrum omnis quasi quisquam ratione, vel veniam.
                                </p>
                            </Grid>
                            <Grid item xs={12}>
                                <h4>Доступные вариации:</h4>
                                <div className={classes.apple}>
                                    <span>Яблоко</span>
                                    <div className={classes.circle} />
                                </div>
                                <div className={classes.lemon}>
                                    <span>Лимон</span>
                                    <div className={classes.circle} />
                                </div>
                            </Grid>
                        </Grid>

                    </Grid>
                </Container>
            </div>
            {/*</Container>*/}
        </section>
    )

};


export default HomePage;