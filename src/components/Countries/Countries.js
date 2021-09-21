import React, { useEffect, useState } from 'react';
import SingleCountry from '../Country/SingleCountry';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h4>Countries Available: {countries.length}</h4>
            <div className='countries'>
                {
                    countries.map(country => <SingleCountry
                        key={country.name}
                        country={country} />)
                }
            </div>
        </div>
    );

};

export default Countries;