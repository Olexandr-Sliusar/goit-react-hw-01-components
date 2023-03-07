import PropTypes from 'prop-types';
import { Transactions, TableHead, TabletBody } from './Transactions.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Transactions>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>
      <TabletBody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className="first-letter">{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </TabletBody>
    </Transactions>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
