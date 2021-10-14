import React from 'react'
import { NavLink, Link } from 'react-router-dom'


export default function CountriesList(props) {
    return (
        <div>
            { //work with 5 or 10 contries to make it faster
            // use NavLink
            
                props.countries.slice(5).map(eachCountry => <Link to="/" >{eachCountry.name.common}</Link>)
            }      
        </div>
    )
}

