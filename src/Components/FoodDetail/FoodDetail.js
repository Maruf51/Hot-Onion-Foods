import React, { useContext, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import './FoodDetail.css';
import fakeData from '../../FakeData/FakeData';
import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import { UserContext } from '../../App';

const FoodDetail = () => {
    let location = useLocation();
    let history = useHistory();
    let { from } = location.state || { from: { pathname: "/cart" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const {foodId} = useParams();
    const foodData = fakeData.find(food => food.id === foodId);
    const {foodName, id, foodDetails, foodImage, price} = foodData;
    const [value, setValue] = useState(1)
    const totalPrice = (price * value).toFixed(2);
    const handleAddBtn = () => {
        const food = {
            foodId: id,
            email: loggedInUser.email,
            quantity: value
        }
        console.log(food)
        fetch(`http://localhost:5000/addUserFood`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(food)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedCount){
                alert('Food has been added to cart.')
                history.replace(from);
            }
        })
    }

    
    return (
        <div className="d-flex container justify-content-between">
            <div className="widthFifty p-5 foodDetailText">
                <h1>{foodName}</h1>
                <p>{foodDetails}</p>
                <div className="d-flex priceArea">
                    <h2>${totalPrice}</h2>
                    <div className="d-flex align-items-center itemPrice ml-4">
                        <FontAwesomeIcon onClick={() => {if (value > 1) setValue(value - 1)}} className="plusMinusIcon" icon={faMinus} />
                        <input disabled name="itemQuantity" value={value} className="text-center p-0 bg-white form-control mx-1 itemQuantity" type="text" onChange={(e) => setValue(e.target.value)}/>
                        <FontAwesomeIcon onClick={() => setValue(value + 1)} className="plusMinusIcon" icon={faPlus}/>
                    </div>
                </div>
                <button onClick={handleAddBtn} className="add-button mt-4"><FontAwesomeIcon className="mr-2" icon={faShoppingCart}/>Add</button>
            </div>
            <div className="widthFifty p-5">
                <img className="foodDetailImg" src={foodImage} alt=""/>
            </div>
        </div>
    );
};

export default FoodDetail;