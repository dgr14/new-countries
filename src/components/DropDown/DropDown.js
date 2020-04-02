import React, {useState, useEffect} from 'react'
import styled from  'styled-components'
import { render } from '@testing-library/react'

import Axios from 'axios'

const DDWraper = styled.div`
    // height: 15%;
    border: 2px solid black;
    box-shadow: ${({ theme }) => theme.boxShadow};

`

const DDHeader = styled.div`

`

const DDHeaderTitle = styled.div`

`

const DDList = styled.ul`

`

const DDli = styled.li`


    :hover{
        color: red;
    }
`
// ************************************************************
const DropDown = props => {
    console.log(props)
    const { list, dropTitle, toggleItem, titleHelper } = props
    const [region, setRegion] = useState([])
    // State for DropDown
    const [listOpen, setListOpen] = useState(false)
    const [headerTitle, setHeaderTitle] = useState(props.title)

    // to separate by region
    useEffect(() => {
        if(region){
        Axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
        .then((response) => setRegion(response.data))}
    }, [region])

    const handleClickOutside = () => setListOpen(false)

    const toggleList = () =>  setListOpen( prevState => !prevState )

    // static getDerivedStateFromProps(nextProps){
    //     const count = nextProps.list.filter(function(a) { return a.selected }).length;
    //     console.log(count)
    //     if (count === 0) {
    //         return {headerTitle: nextProps.title}
    //     } else if (count === 1) {
    //         return {headerTitle: `${count} ${nextProps.titleHelper}`}
    //     } else if (count > 1) {
    //         return {headerTitle: `${count} ${nextProps.titleHelper}s`}
    //     }
    // }

    return(
        <DDWraper>
            <DDHeader onClick={() => toggleList()}>
                <DDHeaderTitle>{dropTitle}</DDHeaderTitle>
                {listOpen ? <p>Filter by Region</p> : <p>Filter by Region</p>}
            </DDHeader>
            
            {listOpen && <DDList>
                {list.map((item) => (
                    <DDli key={item.title} onClick={() => toggleItem(item.id, item.key)}>{item.title}{item.selected && `&#10003`}</DDli>
                ))}
                
            </DDList>
            }
        </DDWraper>
    )
}

export default DropDown