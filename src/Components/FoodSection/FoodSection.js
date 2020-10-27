import React, { useEffect, useState } from 'react';
import Foods from '../Foods/Foods';
import './FoodSection.css';
import breakfast from '../../FakeData/Breakfast'
import lunch from '../../FakeData/Lunch'
import dinner from '../../FakeData/Dinner'
import fakeData from '../../FakeData/FakeData'

const FoodSection = () => {
    const [filterFoods, setFilterFoods] = useState('lunch')
    const [activeFoods, setActiveFoods] = useState(1)
    const breaks = fakeData.filter(foods => foods.category === filterFoods)
    return (
        <div className="container">
            <div className="text-center mt-4"> 
                <button style={{outline: 'none'}} className={ activeFoods === 0 ? "foodBtn foodCategory" : "foodBtn"} onClick={() => {
                    setFilterFoods('breakfast');
                    setActiveFoods(0)
                }}>Breakfast</button>
                <button style={{outline: 'none'}} className={ activeFoods === 1 ? "foodBtn foodCategory mx-4" : "foodBtn mx-4"} onClick={() => {
                    setFilterFoods('lunch');
                    setActiveFoods(1)
                }}>Lunch</button>
                <button style={{outline: 'none'}} className={ activeFoods === 2 ? "foodBtn foodCategory" : "foodBtn"} onClick={() => {
                    setFilterFoods('dinner');
                    setActiveFoods(2)
                }}>Dinner</button>
            </div>
            <div className="container d-flex justify-content-around flex-wrap foodSection">
                {
                    breaks.map(foods => <Foods key={foods.id} foods={foods}></Foods>)
                }
            </div>
            <div className="text-center">
                <button className="foodCheckoutBtn mt-4">Checkout Your Food</button>
            </div>
        </div>
    );
};

export default FoodSection;