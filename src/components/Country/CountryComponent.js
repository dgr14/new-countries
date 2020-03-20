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
    const { countries } = props

    return(
        // need to pass props from country page to here
        <CountryContainer>

            <CountryFlag src={countries.flag}/>
            <CountryName>{countries.name}</CountryName>
            <CountryPopulation>{countries.population}</CountryPopulation>
            <CountryRegion>{countries.region}</CountryRegion>
            <CountryCapital>{countries.capital}</CountryCapital>

        </CountryContainer>
    )
}

export default CountryComponent