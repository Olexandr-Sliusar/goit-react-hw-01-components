import { Profile } from 'components/Profile/Profile';
import user from '../../src/user.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: 16,
      }}
    >
      <Profile userData={user} />
    </div>
  );
};
