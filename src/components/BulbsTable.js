import React from 'react';
import { observer } from 'mobx-react-lite';
import {
  Box, Checkbox, Table,
} from 'rendition';
import { reaction } from 'mobx';

const BulbsTable = observer(({ model }) => {
  const { selectedBulb, bulbs } = model;
  // --- Code to force update the table view manually
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  reaction(
    () => bulbs.map(bulb => bulb.forceUpdateBulbsTableTrigger),
    () => { forceUpdate(); },
  );
  //---
  const columns = [
    {
      field: 'name',
      label: 'Room',
      sortable: true,
      render: room => <Box><b>{room}</b></Box>,
    },
    {
      field: 'me',
      label: 'State',
      render: bulb => (
        <Box>
          <Checkbox
            label={bulb.state ? <div style={{ float: 'right' }}>On</div> : <div>Off</div>}
            toggle
            checked={bulb.state}
            onChange={(e) => { model.setSelectedBulb(null); bulb.changeState(e.target.checked); bulb.patchDevice(); }}
          />
        </Box>
      ),
    },
    {
      field: 'brightness',
      label: 'Brightness',
      render: brightness => (
        <span>
          {Math.round(brightness)}
          %
        </span>
      ),
    },
  ];
  return (
    <Table
      data-test="bulbs-table"
      rowKey="key"
      highlightedRows={[selectedBulb ? selectedBulb.key : null]}
      columns={columns}
      data={bulbs}
      onRowClick={(bulb) => { model.setSelectedBulb(bulb); }}
    />
  );
});
export default BulbsTable;
