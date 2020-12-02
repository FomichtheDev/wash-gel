import React from 'react';
import classes from './powder-page.module.css';
import Container from "@material-ui/core/Container";
import Filters from "../Filters/Filters";
import PowderCard from "../PowderCard/PowderCard";
import {useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import {useParams} from "react-router";

function PowderPage() {

    const powders = useSelector(state => state.powders);
    const sortParams = useSelector(state => state.sortParams);
    const {sortType} = useParams();

    if(sortType){
        switch (sortType) {
            default:
                return powders;
            case "priceAsc":
                powders.sort((a, b) => {
                    if (a.discountPrice) return a.discountPrice - b.price;

                    else if (b.discountPrice) return a.price - b.discountPrice;

                    else if (a.discountPrice && b.discountPrice) return a.discountPrice - b.discountPrice;

                    else return a.price - b.price;
                });
                break;
            case "priceDesc":
                powders.sort((a, b) => {
                    if(a.discountPrice) return b.price - a.discountPrice;

                    else if(b.discountPrice) return b.discountPrice - a.price;

                    else if(a.discountPrice && b.discountPrice) return b.discountPrice - a.discountPrice;

                    else return b.price - a.price;
                });
                break;
            case "alphabet":
                powders.sort((a, b) => {
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


    const mapPowders = powders.map((powder, index) => {

        switch (powder.color) {
            default:
                return (
                    <PowderCard name={powder.name} type={powder.type} price={powder.price} discountPrice={powder.discountPrice}
                             description={powder.description} img={powder.img} weight={powder.weight} key={index + powder.name} id={powder.id}/>
                );

            case "universal":
                if (sortParams.uniweightersal) {
                    return (
                        <PowderCard name={powder.name} type={powder.type} price={powder.price} discountPrice={powder.discountPrice}
                                 description={powder.description} img={powder.img} weight={powder.weight} key={index + powder.name}
                                 id={powder.id}/>
                    )
                }
                return null;

            case "color":
                if (sortParams.color) {
                    return (
                        <PowderCard name={powder.name} type={powder.type} price={powder.price} discountPrice={powder.discountPrice}
                                 description={powder.description} img={powder.img} weight={powder.weight} key={index + powder.name}
                                 id={powder.id}/>
                    )
                }
                return null;

            case "for_kids":
                if (sortParams.for_kids) {
                    return (
                        <PowderCard name={powder.name} type={powder.type} price={powder.price} discountPrice={powder.discountPrice}
                                 description={powder.description} img={powder.img} weight={powder.weight} key={index + powder.name}
                                 id={powder.id}/>
                    )
                }
                return null;
            case "black":
                if (sortParams.black) {
                    return (
                        <PowderCard name={powder.name} type={powder.type} price={powder.price} discountPrice={powder.discountPrice}
                                 description={powder.description} img={powder.img} weight={powder.weight} key={index + powder.name}
                                 id={powder.id}/>
                    )
                }
                return null;
            case "white":
                if (sortParams.white) {
                    return (
                        <PowderCard name={powder.name} type={powder.type} price={powder.price} discountPrice={powder.discountPrice}
                                 description={powder.description} img={powder.img} weight={powder.weight} key={index + powder.name}
                                 id={powder.id}/>
                    )
                }
                return null;
        }

    });


    return (
        <section className={classes.gel_page}>
            <Container>
                <Filters asc='/washing-powder/sortedBy/priceAsc' desc='/washing-powder/sortedBy/priceDesc' alph='/washing-powder/sortedBy/alphabet'/>
                <Grid container>
                    {mapPowders}
                </Grid>
            </Container>
        </section>
    )

};


export default PowderPage;