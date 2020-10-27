import React from 'react';
import './ChooseUs.css';
import burger from '../../images/Image/adult-blur-blurred-background-687824.png'
import chef from '../../images/Image/chef-cook-food-33614.png'
import architecture from '../../images/Image/architecture-building-city-2047397.png'
import busIcon from '../../images/ICON/Group 204.png'
import ringIcon from '../../images/ICON/Group 1133.png'
import truckIcon from '../../images/ICON/Group 245.png'

const ChooseUs = () => {
    return (
        <div className=" whyYouChooseUs container">
            <h2>Why you choose us</h2>
            <p>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
            <div className="d-flex justify-content-between">
                <div className="chooseUsSection">
                    <img src={burger} alt=""/>
                    <div className="chooseUsArea">
                        <img src={busIcon} alt=""/>
                        <div className="chooseUsTextArea">
                            <h4>Fast Delivery</h4>
                            <p>Keep your system in sync with automated web hook based notification each time link is paid and how we dream about our future.</p>
                            <button className="foodBtn seeMoreBtn">See more</button>
                        </div>
                    </div>
                </div>
                <div className="chooseUsSection">
                    <img src={chef} alt=""/>
                    <div className="chooseUsArea">
                        <img src={ringIcon} alt=""/>
                        <div className="chooseUsTextArea">
                            <h4>A Good Auto Responder</h4>
                            <p>Keep your system in sync with automated web hook based notification each time link is paid and how we dream about our future.</p>
                            <button className="foodBtn seeMoreBtn">See more</button>
                        </div>
                    </div>
                </div>
                <div className="chooseUsSection">
                    <img src={architecture} alt=""/>
                    <div className="chooseUsArea">
                        <img src={truckIcon} alt=""/>
                        <div className="chooseUsTextArea">
                            <h4>Home Delivery</h4>
                            <p>Keep your system in sync with automated web hook based notification each time link is paid and how we dream about our future.</p>
                            <button className="foodBtn seeMoreBtn">See more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;