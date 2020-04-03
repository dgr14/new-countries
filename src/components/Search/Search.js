import React, { useState } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { fetchData } from '../../services/countries'
import ResultList from './ResultList'

// Styles
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 90%;
    outline: 2px solid black;
    
`
const SearchInput = styled.input`
    width: 100%;

`
// ********************************************************
const Search = props => {
    // State w/ hooks
    const [query, setQuery] = useState('')
    const [searchQuery, setSearchQuery] = useState({})
    const [dataList, setDataList] = useState([])
    const [errorMsg, setErrorMsg] = useState('')

    /**
   * This will be called every time there is
   * a change in the input
   * @param {*} { target: { value } }
   */

   const onChange = ({ target: { value } }) => {
       setQuery(value)
       
       const search = _.debounce(sendQuery, 300);
       
       setSearchQuery(prevSearch => {
           if (prevSearch.cancel){
               prevSearch.cancel()
            }
            return search;
        });
        
        search(value)
    };

    const sendQuery = async value => {
        const { cancelPrevQuery, result } = await fetchData(value);

        if(cancelPrevQuery) return;
        console.log(result.Response)
        if(result.Response === 'True'){
            setDataList(result.Search);
            setErrorMsg('');
        } else {
            setDataList([]);
            setErrorMsg(result.Error)
        }
    }

    return(
    <SearchContainer>
        <SearchInput onChange={onChange} type='text' value={query} placeholder='Search for a Country...' />
        <ResultList items={dataList} />
        {errorMsg}
    </SearchContainer>
    )
}

export default Search