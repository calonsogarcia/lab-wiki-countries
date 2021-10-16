import React from 'react'


export default function CountryDetails({match, countries}) {


    //console.log({CountriesList})

    const foundCountry= countries.find((oneCountry) => {
        return oneCountry.cca3 === match.params.name
    })


    return (
        <div>
            <p>Country details</p>
            <p> {foundCountry.flag} </p>
            <p> {foundCountry.name.official} </p>
            <p> {foundCountry.region} </p>
        </div>
    )
}
