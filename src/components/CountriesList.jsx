import React from 'react'
import { NavLink, Link } from 'react-router-dom'


export default function CountriesList(props) {
    return (
        <div>
            { //work with 5 or 10 contries to make it faster
            // use NavLink
            
                props.countries.map(eachCountry => <Link to={`/country/${eachCountry.cca3}`}>{eachCountry.name.common}</Link>)
            }      
        </div>
    )
}

