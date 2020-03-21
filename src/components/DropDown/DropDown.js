import React, {useState} from 'react'
import styled from  'styled-components'
import { render } from '@testing-library/react'

const DDWraper = styled.div`
    // height: 15%;
`

const DDHeader = styled.div`

`

const DDHeaderTitle = styled.div`

`

const DDList = styled.ul`

`

const DDli = styled.li`

`

const regionArr = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']



const DropDown = props => {
    const { dropTitle } = props
    // State for DropDown
    const [listOpen, setListOpen] = useState(false)
    const [headerTitle, setHeaderTitle] = useState(props.title)

    const handleClickOutside = () => setListOpen(false)

    const toggleList = () =>  setListOpen( prevState => !prevState )

        return(
            <DDWraper>
                <DDHeader onClick={() => toggleList()}>
                    <DDHeaderTitle>{props.dropTitle}</DDHeaderTitle>
                </DDHeader>
                <DDList>
                    <DDli>klsjadfkjasdhfkj</DDli>
                    <DDli>askndflkasdlkfj</DDli>
                    <DDli>klnasdflkjasdlkfj</DDli>
                </DDList>
            </DDWraper>
        )
    
}

export default DropDown