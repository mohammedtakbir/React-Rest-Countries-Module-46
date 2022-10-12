import React, { useState } from 'react';

const Country = (props) => {
    // console.log(props.languages)
    const {flags, name, capital, languages, region, population} = props?.country || {};
    // console.log(Object.keys(languages))
    // setLanguage(Object.keys(languages))
    
    return (
        <div>
            <div className='my-10 bg-teal-200 p-5 h-full rounded-lg'>
                <img className='mx-auto' src={flags.png} alt="" />
                <div className='px-10 mt-5'>
                    <div className='flex justify-between items-center'>
                        <h2 className="text-3xl font-bold">{name.common}</h2>
                        <h3 className="text-xl font-bold">Capital: {capital}</h3>
                    </div>
                    <div className="flex justify-between items-center mt-5">
                        <p className="font-medium text-xl">Region: {region}</p>
                        <p className="font-medium text-xl">Population: {population}</p>
                        {/* {
                            Object.keys(languages).map(l => <p>{l}</p>)
                        } */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;