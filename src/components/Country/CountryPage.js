import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Axios from 'axios'

import CountryComponent from './CountryComponent'
import DropDown from '../DropDown/DropDown'

const CountryPageContainer = styled.div`
    height: 100%;
    background: ${({ theme }) => theme.background}
`
const DropDownContainer = styled.div`
    // background-color: blue;
    margin-top: 1rem;
    position: relative;
    display: inline-block;
`
const ListBtn = styled.button`
    // background-color: #3498DB;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border: 2px solid black;

    // :hover {
    //     background-color: red;
    // }
    ::visitied {
        background-color: white;
    }
`
const DropDownContent = styled.div`

    display: none;
    position: absolute;
    // background-color: black;
    box-shadow: ${({ theme }) => theme.boxShadow};
    z-index: 1;
`

const MapContainer = styled.div`

`

const CountryPage = () => {
    // here is where state is held for countries
    const [countries, setCountries] = useState([])
    const [region, setRegion] = useState([])

    
    // gets all country data on api
    useEffect(() => {
        Axios.get('https://restcountries.eu/rest/v2/all')
        .then((response) => setCountries(response.data))
    }, [])

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
            {/* search bar */}

            {/* drop down menu */}
            <DropDownContainer>
                <ListBtn>DropDown</ListBtn>
                <DropDownContent>
                    {/* here are where country links will go */}
                    <DropDown 
                        dropitle="Select Country"
                        list={mappedRegions}
                    />
                </DropDownContent>
            </DropDownContainer>

            {/* container to hold country component */}
            <MapContainer>
                {mappedCountries}
            </MapContainer>

        </CountryPageContainer>
    )
}

export default CountryPage