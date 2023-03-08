import { NextPage } from 'next';
import { memo } from 'react';

const positions = [
  {
    positionId: 1,
    botId: 'XQ-IS-TW-5M-0100',
    symbol: '2330.TW',
    description: '台積電',
    side: 'short',
    quantity: 1000,
    avgPrice: 400.5,
    entryTime: new Date(2019, 10, 21, 9, 15, 0),
  },
];

const PositionTable: NextPage = memo(function PositionTable(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date Time</th>
            <th>Symbol</th>
            <th>Description</th>
            <th>Side</th>
            <th>Quantity</th>
            <th>Avg Price</th>
            <th>Entry Time</th>
          </tr>
        </thead>
        <tbody>
          {positions.map(position => {
            return <tr key={``}></tr>;
          })}
        </tbody>
      </table>
    </div>
  );
});

export default PositionTable;
