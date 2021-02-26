import { Modal } from 'rendition';
import React from 'react';
import BulbProperties from './BulbProperties';

const BulbModalForMobiles = ({ model }) => (
  <Modal
    done={() => {
      model.selectedBulb.patchDevice();
      model.setSelectedBulb(null);
    }}
  >
    <BulbProperties model={model} />
  </Modal>
);
export default BulbModalForMobiles;
