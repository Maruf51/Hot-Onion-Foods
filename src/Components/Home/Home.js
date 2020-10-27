import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import FoodSection from '../FoodSection/FoodSection';
import Footer from '../Footer/Footer';
import SearchArea from '../SearchArea/SearchArea';

const Home = () => {
    return (
        <div>
            <SearchArea></SearchArea>
            <FoodSection></FoodSection>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;