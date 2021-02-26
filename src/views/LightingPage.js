import { Flex, Container } from 'rendition';
import React from 'react';
import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import BulbsTable from '../components/BulbsTable';
import BulbProperties from '../components/BulbProperties';
import BulbModalForMobiles from '../components/BulbModalForMobiles';

const TableBox = styled(Container)`
    flex-basis:55%;
`;
const SliderBox = styled(Container)`
    margin-right:0px;
    border-top-left-radius: 6px;
    background-color:#3b3c41;
    color:white;
    flex-basis:45%;
    height:100%;
    @media (max-width: 600px) {
        display:none
    }
`;
const Arrow = styled.div`
  width: 0; 
  height: 0; 
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent; 
  border-right: 10px solid #3b3c41;
  position: relative;
  left: -24px;
  top:100px;
    @media (max-width: 600px) {
        display:none
    }
`;
const Main = styled(Flex)`
    height: 100%;
    padding-top:120px;
`;
const LightingPage = observer(({ model }) => {
  const { selectedBulb } = model;
  return (
    <Main>
      <TableBox>
        <BulbsTable model={model} />
      </TableBox>
      <SliderBox>
        {selectedBulb
          ? (
            <div>
              <Arrow />
              <BulbProperties model={model} />
              {(window.innerWidth < 600)
                && <BulbModalForMobiles model={model} />
              }
            </div>
          )
          : <h2>Click on a room in the table on the left to change the room bulb properties</h2>
        }
      </SliderBox>
    </Main>
  );
});
export default LightingPage;
