import React from 'react';
import './SingleCountry.css'

const SingleCountry = (props) => {
    const { name, capital, flag, population, region } = props.country
    return (
        <div className="country">
            <img src={flag} alt="flag" />
            <h1>{name}</h1>
            <p>Capital: {capital} </p>
            <p>Population: {population} </p>
            <p>Region: {region} </p>
        </div>
    );
};

export default SingleCountry;