import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = () => {
    //* step1
    const [countries, setCountries] = useState([]);
    //* step2
    useEffect( () => {
        //* step3
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        //* step4
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>hello from the country</h2>
            <h3>available countries: {countries.length}</h3>
            <div className='countries-container'>
                {   //* step5
                    countries.map(country => <Country 
                        country={country}
                        key={country.cca3} //? add unique key for mapping components
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;