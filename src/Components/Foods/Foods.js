import React from 'react';
import { Link } from 'react-router-dom';
import './Foods.css';

const Foods = (props) => {
    const {foodImage, foodName, id, price, foodDetails, detail} = props.foods;
    return (
            
                <div className="food text-center mt-5">
                    <Link to={"/food/" + id}>
                        <div className="p-3 text-center">
                            <img className="foodImage" src={foodImage} alt=""/>
                            <div className="food-detail">
                                <h5 className="foodName">{foodName}</h5>
                                <p className="detail">{detail}</p>
                                <h2 className="price">${price}</h2>
                            </div>
                        </div>
                    </Link>
                </div>
            
    );
};

export default Foods;