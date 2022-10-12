import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div className='container mx-auto px-5'>
            <h3 className='font-bold text-3xl my-5 text-center'>ALl Countries should be load here.</h3>
            <h4 className="font-medium text-xl text-center">Available Countries: {countries.length}</h4>
            <div className='custom-grid'>
                {
                    countries?.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;