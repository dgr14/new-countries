import React from 'react'
import styled from 'styled-components'

const CountryContainer = styled.div`
    width: 80%;
    position: relative;
    margin: 2rem 0;
    box-shadow: ${({ theme }) => theme.boxShadow}
`
const CountryFlag = styled.img`
    float:  left;
    width:  100%;
    height: 200px;
    background-size: cover;
`
const FlagContainer = styled.div`
    // height: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const InfoContainer = styled.div`
    padding-left: 15px;
`
const CountryName = styled.h2`

`
const CountryPopulation = styled.p`

`
const CountryRegion = styled.p`

`
const CountryCapital = styled.p`

`
function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// ***************************************************
const CountryComponent = props => {
    console.log(props)
    const { countryData } = props

    return(
        // need to pass props from country page to here
        <CountryContainer>

            <FlagContainer>
                <CountryFlag src={countryData.flag}/>
            </FlagContainer>

            <InfoContainer>
                <CountryName>{countryData.name}</CountryName>
                <CountryPopulation>Population:  {numberWithCommas(countryData.population)}</CountryPopulation>
                <CountryRegion>Region:  {countryData.region}</CountryRegion>
                <CountryCapital>Capital:  {countryData.capital}</CountryCapital>
            </InfoContainer>

        </CountryContainer>
    )
}

export default CountryComponent