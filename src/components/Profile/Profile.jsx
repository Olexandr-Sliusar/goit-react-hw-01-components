import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Description,
  UserName,
  Avatar,
  UserTag,
  Location,
} from './Profile.styled';
import { Statistics } from 'components/UserStatistics/Statistics';

export const Profile = ({ userData }) => {
  const { username, tag, location, avatar, stats } = userData;

  const stringTags = `@${tag}`;

  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>{stringTags}</UserTag>
        <Location>{location}</Location>
      </Description>
      {<Statistics userStatistics={stats} />}
    </ProfileContainer>
  );
};

Profile.propTypes = {
  userData: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
