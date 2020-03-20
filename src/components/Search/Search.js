import React from 'react'
import styled from 'styled-components'

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 365px;

`
const SearchInput = styled.input`
    outline: 2px solid black;
    width: 100%;

`

const Search = props => {
    return(
        <SearchContainer>
            <SearchInput placeholder="Search for a Country..."/>
        </SearchContainer>
    )
}

export default Search