import React, { useEffect, useState } from 'react';
import SingleCountry from '../Country/SingleCountry';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        // fetch("https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR1nT-SuE7XIJHUlnNmzMRF98HqfNT_ixJIs_t4m5NncMIC5qbAIR-8Rlds")
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h4>Countries Available: {countries.length}</h4>
            {/* <h5>API used: https://restcountries.eu/rest/v2/all</h5> */}
            <div className='countries'>
                {
                    countries.map(country => <SingleCountry
                        key={country.name.common}
                        country={country} />)
                }
            </div>
        </div>
    );

};

export default Countries;