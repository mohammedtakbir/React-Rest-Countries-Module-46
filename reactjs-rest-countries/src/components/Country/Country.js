import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props)
    const {region, area, population, name, flags} = props.country;
    return (
        <div className="country">
            <h2>{name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <p><small>Region: {region}</small></p>
            <p>Area: {area}</p>
        </div>
    );
};  

export default Country;