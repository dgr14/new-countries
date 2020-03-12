import React from 'react'
import { func, string } from 'prop-types'

import styled from 'styled-components'

const ToggleBtn = styled.button`
    // background-color: red;
    margin-right: 0.5rem;
    height: 60px;
    
`
const BtnText = styled.h3`
    color: ${({ theme }) => theme.text};
    // transition: ${({ theme }) => theme.transition};
`

const Toggle = ({ theme, toggler }) => {
    const isLight = theme === 'light';
    
    return (
        <ToggleBtn onClick={toggler} >
            {(theme === 'light') ? <BtnText>Light Mode</BtnText> : <BtnText>Dark Mode</BtnText>}
        </ToggleBtn>
    )
}

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;