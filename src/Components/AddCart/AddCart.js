import React, { useContext, useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import './AddCart.css';
import fakeData from '../../FakeData/FakeData';
import CartFood from '../CartFood/CartFood';
import {UserContext} from '../../App'

const AddCart = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [deliveryDetails, setDeliveryDetails] = useState({address: '',})
    const [cartFood, setCartFood] = useState([])
    useEffect(() => {
        fetch(`https://fierce-earth-11436.herokuapp.com/?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setCartFood(data))
    }, []);
    console.log(cartFood)
    const handleAddressChange = (e) => {
        const newDetails = {...deliveryDetails}
        newDetails[e.target.name] = e.target.value;
        setDeliveryDetails(newDetails);
    }
    
    // total food pricing
    let totalPrice = 0;
    let totalFood = 0;
    for (let i = 0; i < cartFood.length; i++) {
        let element = cartFood[i];
        const food = fakeData.find(pd => pd.id === element.foodId);
        totalPrice = totalPrice + (food.price * element.quantity);
        totalFood = totalFood + element.quantity;
    }
    let tax = ((totalPrice * 5) / 100).toFixed(2);
    let deliveryFee = 5;
    let total = (parseFloat(totalPrice) + parseFloat(tax) + parseFloat(deliveryFee)).toFixed(2);

    return (
        <div className="container d-flex justify-content-between deliveryPage">
            <form className="width-fifty text-center delivery-form">
                <h3 className="delivery-text">Edit Delivery Details</h3>
                <input className="info-input" type="text" value="Deliver to door" disabled/>
                <input className="info-input" type="text" name="address" onBlur={handleAddressChange} placeholder="Address(Road no.)" required/>
                <input className="info-input" type="text" placeholder="Flat, suit or floor" required/>
                <input className="info-input" type="text" placeholder="Business Name"/>
                <textarea className="info-input info-textarea" cols="30" rows="10" placeholder="Add delivery instructor"></textarea>
                <input className="info-input info-submit" type="submit" value="Save & Continue"/>
            </form>
            <div className="width-fifty cart-food-section">
                <div className="restaurant-area">
                    <h4 className="restauraName">From <strong>Gulshan Plaza Restaura GPR</strong></h4>
                    <p className="m-0" style={{fontSize: "14px"}}>Arriving in 20-30 min</p>
                    <p className="mt-1" style={{fontSize: "14px", fontWeight: "500"}}>{deliveryDetails.address}</p>
                    {
                        cartFood.map(food => <CartFood key={food._id} food={food}></CartFood>)
                    }
                </div>
                <div className="price-section mx-auto">
                    <div className="d-flex justify-content-between">
                        <p>Subtotal • {totalFood} item</p>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Tax (5%)</p>
                        <span>${tax}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Delivery fee</p>
                        <span>${deliveryFee}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <strong><p>Total</p></strong>
                        <strong><span>${total}</span></strong>
                    </div>
                </div>
                <div className="text-center">
                    <input className="info-input info-submit order-button" type="submit" value="Place Order"/>
                </div>
            </div>
        </div>
    );
};

export default AddCart;