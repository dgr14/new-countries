import React from 'react'
import styled from 'styled-components'

const CountryContainer = styled.div`

`
const CountryFlag = styled.img`

`
const CountryName = styled.h2`

`
const CountryPopulation = styled.p`

`
const CountryRegion = styled.p`

`
const CountryCapital = styled.p`

`


const CountryComponent = props => {
    console.log(props)
    const { countryData } = props

    return(
        // need to pass props from country page to here
        <CountryContainer>

            <CountryFlag src={countryData.flag}/>
            <CountryName>{countryData.name}</CountryName>
            <CountryPopulation>{countryData.population}</CountryPopulation>
            <CountryRegion>{countryData.region}</CountryRegion>
            <CountryCapital>{countryData.capital}</CountryCapital>

        </CountryContainer>
    )
}

export default CountryComponent