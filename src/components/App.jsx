import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { Friends } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/Transactions/Transactions';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '16px',
      }}
    >
      <Profile userData={user} />
      <Statistics title="Upload stats" data={data} />
      <Friends friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
