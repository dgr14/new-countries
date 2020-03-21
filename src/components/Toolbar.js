import React from 'react'
import styled from 'styled-components'

import Toggle from './Toggle'

const Header = styled.header`
    height: 10%;
    width: 100%;
    box-shadow: ${({ theme }) => theme.boxShadow};
    margin-bottom: 15px;
`
const Nav = styled.nav`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const Titleh1 = styled.h1`
    font-size: 1.2rem;
    padding-left: 1rem;

`

const toolbar = props => (
    
    <Header className='toolbar' >
        <Nav className='toolbar__navigation'>
            <Titleh1>Where in the world?</Titleh1>
           
                {/* this replaces toolbar__navigation-items */}
                {/* I should put my theme toggle component here */}

                <Toggle theme={props.theme} toggler={props.toggler}/>
        </Nav>
    </Header>
)

export default toolbar