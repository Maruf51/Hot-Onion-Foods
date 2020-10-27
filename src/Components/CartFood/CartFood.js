import React, { useState } from 'react';
import './CartFood.css';
import fakeData from '../../FakeData/FakeData';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartFood = (props) => {
    const {foodId, quantity, _id} = props.food;
    const orderedFood = fakeData.find(food => food.id === foodId)
    const {foodName, foodImage, price} = orderedFood;
    const [changeQuantity, setChangeQuantity] = useState(quantity)
    return (
        <div className="d-flex justify-content-center cart-food-area align-items-center px-3 py-2 mb-3">
            <div className="cart-food-image">
                <img className="cartFoodImage" src={foodImage} alt=""/>
            </div>
            <div className="cart-food-detail">
                <p className="cartFoodName m-0">{foodName}</p>
                <h4 className="cartFoodPrice my-2">${(changeQuantity * price).toFixed(2)}</h4>
                <p className="cartFoodQuantity m-0">Quantity: {changeQuantity}</p>
            </div>
        </div>
    );
};

export default CartFood;