import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import user from 'user.json';
import data from 'data.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 16,
      }}
    >
      <Profile userData={user} />
      <Statistics title="Upload stats" data={data} />
    </div>
  );
};
