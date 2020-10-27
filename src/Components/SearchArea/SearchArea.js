import React from 'react';
import './SearchArea.css'

const SearchArea = () => {
    return (
        <div className="searchArea d-flex align-items-center">
            <div className="m-auto">
                    <h1>Best food waiting for your belly</h1>
                <br/>
                <div className="searchFood m-auto">
                    <input className="searchFoodInput" id="countryInput"  type="text" placeholder="Search food name..." />
                    <button className="btn btn-success searchBtn">Search</button>
                </div>
            </div>
        </div>
    );
};

export default SearchArea;