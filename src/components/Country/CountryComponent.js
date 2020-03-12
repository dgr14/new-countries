import React from 'react'
// import styled from 'styled-components'



const CountryComponent = props => {
    console.log(props)
    const { countries } = props
    return(
        // need to pass props from country page to here
        <div>{countries.name}</div>
    )
}

export default CountryComponent