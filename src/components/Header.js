import React from 'react';
import { Box, Fixed, Flex } from 'rendition';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

const Avatar = styled.span` 
    margin-left:10px; 
    margin-right:5px;
    padding:7px 5px;
    background-color:#484848;
    color:white;
    border-radius:50%;
    @media (max-width: 600px) {
        font-size:20px;
    }
`;
const UserBox = styled(Box)`
  border-left:1px solid grey;
  cursor: pointer;
  :hover{
    background-color:#f2f3f2;
    color:black;
  }
`;
const ResponsiveDateTime = styled(Moment)`
    @media (max-width: 600px) {
        display:none
    }
`;
const NavigationButton = styled.button`
    background-color:#ebeef3;
    border-radius:5px;
    color:#3b3c41;
    padding:10px;
    border:0px;
    font-weight:bold;
    margin-right:6px;
    cursor:pointer;
    @media (min-width: 600px) {
        display:none
    }
`;
const ResponsiveName = styled.span`
  @media (max-width: 600px) {
        display:none
  }
`;
const ResponsivePageName = styled(Box)`
  font-size:24px;
  @media (min-width: 600px) {
        display:none
  }
`;
const Container = styled(Fixed)`
  width:100%;
  z-index:9999;
`;
const Header = () => (
  <Container color="#eeeeee" bg="#222222">
    <Flex justifyContent="space-between">
      <Box p={14}>
        <ResponsiveDateTime format="dddd D MMMM, YYYY" interval={60 * 30 * 1000} />
        <NavigationButton>
          <FontAwesomeIcon icon={faAngleLeft} />
            &nbsp;Back
        </NavigationButton>
      </Box>
      <Box p={14}>
        <ResponsiveDateTime format="h:mm A" interval={30 * 1000} />
        <ResponsivePageName>
          <FontAwesomeIcon style={{ marginRight: '6px' }} icon={faLightbulb} color="white" />
          Lighting
        </ResponsivePageName>
      </Box>
      <UserBox p={14}>
        <ResponsiveName>Name Surname</ResponsiveName>
        <Avatar>
          NS
        </Avatar>
        <FontAwesomeIcon icon={faCaretDown} />
      </UserBox>
    </Flex>
  </Container>
);

export default Header;
