import React, { useState } from 'react';
import Toolbar from './components/Toolbar'
import CountryPage from './components/CountryPage'

// Styled Component imports
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themes/theme'
import { GlobalStyles } from './themes/global'
import styled from 'styled-components'

// *** Styled Components ***

const ProjectContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const ViewContainer = styled.main`
  // overflow-y: auto;
  height: 90%;
  width: 100%;
  // background-color: red;

`

function App() {
  const [theme, setTheme] = useState('light')


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
