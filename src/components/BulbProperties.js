import React from 'react';
import {
  ArcSlider, Box, Button, Input,
} from 'rendition';
import { observer } from 'mobx-react-lite';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { ReactComponent as SunSvg } from '../static/img/sun.svg';

const BrightnessLabel = styled.span`
    font-size: 12px;
`;
const Percentage = styled.span`
    font-size: 32px;
    font-weight: bold;
`;
const PercentSymbol = styled.span`
    font-size: 14px;
    margin-left:-8px;
`;
const MakeChangesButton = styled(Button)`
  @media (max-width: 600px) {
        display:none
  }
`;
const Message = styled(Box)`
  @media (max-width: 600px) {
        display:none
  }
`;
const BulbProperties = observer(({ model }) => {
  const bulb = model.selectedBulb;
  return (
    <div>
      <center>
        <Message mt={16}>Please click on Make Changes button after setting the brightness or the name</Message>
        <ArcSlider
          style={{ maxWidth: '500px' }}
          value={bulb.brightnessN}
          onValueChange={(value) => {
            bulb.changeBrightness(value * 100);
          }}
        >
          <center><SunSvg width="14px" height="14px" style={{ fill: '#f2be0a' }} /></center>
          <Percentage>
            <span data-test="slider-percent">{Math.round(bulb.brightness)}</span>
            {' '}
            <PercentSymbol>%</PercentSymbol>
          </Percentage>
          <BrightnessLabel>Brightness</BrightnessLabel>
        </ArcSlider>
        <Box>Change the name:</Box>
        <Input value={bulb.name} onChange={(e) => { bulb.changeName(e.target.value); }} />
        <br />
        <MakeChangesButton mt={16} mb={16} quartenary onClick={() => { bulb.patchDevice(); }}>
          Make changes &nbsp;
          <FontAwesomeIcon icon={faPlayCircle} />
        </MakeChangesButton>
      </center>
    </div>
  );
});
export default BulbProperties;
