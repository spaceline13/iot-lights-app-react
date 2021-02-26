import React from 'react';
import { Box, Provider } from 'rendition';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import MainContext from './logic/Main';
import Header from './components/Header';
import LightingPage from './views/LightingPage';
import Navigation from './components/Navigation';

// to use the .env file
require('dotenv').config();

// theming is used just for the toggles, the rest of the styling has been made using emotion
const theme = {
  checkBox: {
    extend: 'float:left',
    toggle: {
      extend: props => (props.checked ? 'border: 1px solid green;background:green!important' : 'border: 1px solid black;'),
      knob: {
        extend: props => (props.checked ? 'border: 1px solid green;background:white!important' : 'border: 1px solid black;'),
      },
    },
  },
};
const FullHeightProvider = styled(Provider)`
  height:100%;
`;
const MainBox = styled(Box)`
  height:100%;
`;
const App = () => {
  const model = React.useContext(MainContext);
  model.getDevices();
  return (
    <FullHeightProvider theme={theme}>
      <Global styles={css`
          html{
            height:100%
          }
        body {
          margin:0px;
          height:100%;
        }
      `}
      />
      <MainBox>
        <Header data-test="header" />
        <Navigation data-test="navigation" />
        <LightingPage model={model} data-test="lighting-page" />
      </MainBox>
    </FullHeightProvider>
  );
};

export default App;
