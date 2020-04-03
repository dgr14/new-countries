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
  justify-content: center;
  align-items: center;
  `
const TopPortion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
const ViewContainer = styled.main`
  height: 90%;
  width: 100%;
  overflow-y: auto;

`

function App() {
  const [theme, setTheme] = useState('light')

  const [regionTitle, setRegionTitle] = useState( 
    [
      {
          id: 0,
          title: 'Africa',
          selected: false,
          key: 'location'
      },
      {
          id: 1,
          title: 'Americas',
          selected: false,
          key: 'location'
      },
      {
          id: 2,
          title: 'Asia',
          selected: false,
          key: 'location'
      },
      {
          id: 3,
          title: 'Europe',
          selected: false,
          key: 'location'
      },
      {
          id: 4,
          title: 'Oceania',
          selected: false,
          key: 'location'
      }
    ]
  )

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

  function toggleSelected (id, key) {
    let temp = [key]
    temp[id].selected = !temp[id].selected
    setRegionTitle({
      [key] : temp
    })
  }

  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
      <>
        <GlobalStyles />
        <ProjectContainer>
          <TopPortion>
            {/* pass the toggle functionality to the button */}
            <Toolbar theme={theme} toggler={toggleTheme} />
            <Search />
            {/* drop down menu */}
            <DropDown
              titleHelper='Region'
              title='Select Region'
              list={regionTitle}
              toggleItem={toggleSelected}
            />
          </TopPortion>
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
