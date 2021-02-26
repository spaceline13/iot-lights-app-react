import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Fixed } from 'rendition';
import styled from '@emotion/styled';

const NavigationButton = styled.button`
    background-color:#ebeef3;
    border-radius:5px;
    color:#3b3c41;
    padding:10px;
    border:0px;
    font-weight:bold;
    margin-right:6px;
    cursor:pointer;
`;
const PageName = styled.span`
    color: #4d5057;
    margin-left: 14px;
    font-size:16px;
`;
const ResponsiveContainer = styled(Fixed)`
    background:white;
    width:100%;
    top:49px;
    z-index:9999;
    @media (max-width: 600px) {
        display:none
    }
`;
const Navigation = () => (
  <ResponsiveContainer pt={10} pb={10}>
    <NavigationButton>
      <FontAwesomeIcon icon={faHome} />
    </NavigationButton>
    <NavigationButton>
      <FontAwesomeIcon icon={faAngleLeft} />
        &nbsp;Back
    </NavigationButton>
    <PageName>
      <FontAwesomeIcon style={{ marginRight: '6px' }} icon={faLightbulb} color="#4d5057" />
      Lighting
    </PageName>
  </ResponsiveContainer>
);

export default Navigation;
