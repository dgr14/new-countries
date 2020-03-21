import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Axios from 'axios'

import CountryComponent from './CountryComponent'

const CountryPageContainer = styled.div`
    // how do I determine the height of this container to function properly?
    // height: 100%;
    background: ${({ theme }) => theme.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const MapContainer = styled.div`
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const CountryPage = () => {
    // here is where state is held for countries
    const [countries, setCountries] = useState([])
    const [region, setRegion] = useState([])
    // 
    const [displayRegion, setDisplayRegion] = useState(false)

    
    // gets all country data on api
    useEffect(() => {
        Axios.get('https://restcountries.eu/rest/v2/all')
        .then((response) => setCountries(response.data))
    }, [])
    // to separate by region
    useEffect(() => {
        if(region){
        Axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
        .then((response) => console.log(response.data))}
    }, [region])
    
    const mappedCountries = countries.map(country => <CountryComponent countryData={country} />)
    const mappedRegions = region.map(region => <div>{region}</div>)
   
    // console.log
    // console.log(countries)
    return(
        <CountryPageContainer>
        {/* container to hold mapped country component */}
            <MapContainer>
                {mappedCountries}
            </MapContainer>

        </CountryPageContainer>
    )
}

export default CountryPage