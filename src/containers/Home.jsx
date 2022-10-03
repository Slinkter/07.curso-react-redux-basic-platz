import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
//
import "../assets/styles/App.scss";

//
const mapStateToProps = (state) => {
    const props = {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    };
    return props;
};

const Home = ({ myList, trends, originals }) => {
    const ListFavorite = (
        <Categories title="Mi Lista">
            <Carousel>
                {myList.map((item) => (
                    <CarouselItem key={item.id} {...item} isList />
                ))}
            </Carousel>
        </Categories>
    );
    return (
        <React.Fragment>
            <Header />
            <Search isHome />
            {myList.length > 0 && ListFavorite}
            <Categories title="Tendencias">
                <Carousel>
                    {trends.map((item) => (
                        <CarouselItem key={item.id} {...item} />
                    ))}
                </Carousel>
            </Categories>
            <Categories title="Originales de Platzi Video">
                <Carousel>
                    {originals.map((item) => (
                        <CarouselItem key={item.id} {...item} />
                    ))}
                </Carousel>
            </Categories>
        </React.Fragment>
    );
};

//export default connect(props, actions)(Home);
export default connect(mapStateToProps, null)(Home);
