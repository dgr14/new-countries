import React, { useState, useEffect } from 'react';
import Toolbar from './components/Toolbar'
import CountryPage from './components/Country/CountryPage'
import Search from './components/Search/Search'

// Styled Component imports
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themes/theme'
import { GlobalStyles } from './themes/global'
import styled from 'styled-components'
import DropDown from './components/DropDown/DropDown';

// *** Styled Components ***

const ProjectContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const ViewContainer = styled.main`
  height: 90%;
  width: 100%;
  overflow-y: auto;

`

function App() {
  const [theme, setTheme] = useState('light')
  // country hooks
  


  // the function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark')

      // otherwise, it should be light
    } else {
      setTheme('light')
    }
  }

  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
      <>
        <GlobalStyles />
        <ProjectContainer>
          {/* pass the toggle functionality to the button */}
          <Toolbar theme={theme} toggler={toggleTheme} />
          <Search />
          {/* drop down menu */}
          <DropDown 
            title='select location'
            
          />
          <ViewContainer>
            {/* this is where main code will go, nav bar and footer will be below */}
            <CountryPage />
          </ViewContainer>
        </ProjectContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
