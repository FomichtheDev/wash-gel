import React from 'react';
import classes from './gel_page.module.css';
import Container from "@material-ui/core/Container";
import Filters from "../Filters/Filters";
import GelCard from "../GelCard/GelCard";
import {useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import {useParams} from "react-router";

function GelPage() {

    const Gels = useSelector(state => state.gels);
    const sortParams = useSelector(state => state.sortParams);
    const {sortType} = useParams();

    if(sortType){
        switch (sortType) {
            default:
                return Gels;
            case "priceAsc":
                Gels.sort((a, b) => {
                    if (a.discountPrice) return a.discountPrice - b.price;

                    else if (b.discountPrice) return a.price - b.discountPrice;

                    else if (a.discountPrice && b.discountPrice) return a.discountPrice - b.discountPrice;

                    else return a.price - b.price;
                });
                break;
            case "priceDesc":
                Gels.sort((a, b) => {
                    if(a.discountPrice) return b.price - a.discountPrice;

                    else if(b.discountPrice) return b.discountPrice - a.price;

                    else if(a.discountPrice && b.discountPrice) return b.discountPrice - a.discountPrice;

                    else return b.price - a.price;
                });
                break;
            case "alphabet":
                Gels.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                });
                break;
        }
    }


    const mapGels = Gels.map((gel, index) => {

        switch (gel.color) {
            default:
                return (
                    <GelCard name={gel.name} type={gel.type} price={gel.price} discountPrice={gel.discountPrice}
                             description={gel.description} img={gel.img1} v={gel.v} key={index + gel.name} id={gel.id}/>
                );

            case "universal":
                if (sortParams.universal) {
                    return (
                        <GelCard name={gel.name} type={gel.type} price={gel.price} discountPrice={gel.discountPrice}
                                 description={gel.description} img={gel.img1} v={gel.v} key={index + gel.name}
                                 id={gel.id}/>
                    )
                }
                return null;

            case "color":
                if (sortParams.color) {
                    return (
                        <GelCard name={gel.name} type={gel.type} price={gel.price} discountPrice={gel.discountPrice}
                                 description={gel.description} img={gel.img1} v={gel.v} key={index + gel.name}
                                 id={gel.id}/>
                    )
                }
                return null;

            case "for_kids":
                if (sortParams.for_kids) {
                    return (
                        <GelCard name={gel.name} type={gel.type} price={gel.price} discountPrice={gel.discountPrice}
                                 description={gel.description} img={gel.img1} v={gel.v} key={index + gel.name}
                                 id={gel.id}/>
                    )
                }
                return null;
            case "black":
                if (sortParams.black) {
                    return (
                        <GelCard name={gel.name} type={gel.type} price={gel.price} discountPrice={gel.discountPrice}
                                 description={gel.description} img={gel.img1} v={gel.v} key={index + gel.name}
                                 id={gel.id}/>
                    )
                }
                return null;
            case "white":
                if (sortParams.white) {
                    return (
                        <GelCard name={gel.name} type={gel.type} price={gel.price} discountPrice={gel.discountPrice}
                                 description={gel.description} img={gel.img1} v={gel.v} key={index + gel.name}
                                 id={gel.id}/>
                    )
                }
                return null;
        }

    });


    return (
        <section className={classes.gel_page}>
            <Container>
                <Filters asc='/gel/sortedBy/priceAsc' desc='/gel/sortedBy/priceDesc' alph='/gel/sortedBy/alphabet'/>
                <Grid container>
                    {mapGels}
                </Grid>
            </Container>
        </section>
    )

};


export default GelPage;