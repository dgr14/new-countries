import React, {useState} from 'react'
import styled from  'styled-components'
import { render } from '@testing-library/react'

const DDWraper = styled.div`
    height: 15%;
`

const DDHeader = styled.div`

`

const DDHeaderTitle = styled.div`

`

const DDList = styled.ul`

`

const DDli = styled.li`

`

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
                    <DDHeaderTitle>{dropTitle}</DDHeaderTitle>
                </DDHeader>
                <DDList>
                    <DDli></DDli>
                    <DDli></DDli>
                    <DDli></DDli>
                </DDList>
            </DDWraper>
        )
    
}

export default DropDown