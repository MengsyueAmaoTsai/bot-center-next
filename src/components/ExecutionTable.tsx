import { NextPage } from 'next';
import { memo } from 'react';

const executions = [
  {
    botId: 'XQ-IS-TW-5M-0100',
    datetime: new Date(2021, 10, 21, 9, 15, 0),
    symbol: '2330.TW',
    description: '台積電',
    tradeType: 'sell',
    quantity: 1000,
    price: 400.5,
  },
  {
    botId: 'XQ-IS-TW-5M-0100',
    datetime: new Date(2021, 10, 21, 10, 6, 37),
    symbol: '2330.TW',
    description: '台積電',
    tradeType: 'buy',
    quantity: 1000,
    price: 415,
  },
];

const ExecutionTable: NextPage = memo(function ExecutionTable(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date Time</th>
            <th>Symbol</th>
            <th>Description</th>
            <th>Trade Type</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {executions.map(execution => {
            return (
              <tr key={`${execution.botId}-${execution.datetime.toLocaleString()}`}>
                <td>{execution.datetime.toLocaleString()}</td>
                <td>{execution.symbol}</td>
                <td>{execution.description}</td>
                <td>{execution.tradeType}</td>
                <td>{execution.quantity}</td>
                <td>{execution.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
});

export default ExecutionTable;
