import PropTypes from 'prop-types';

import { StatisticsContainer, Label, Quantity } from './Statistics.styled';

export const Statistics = ({ userStatistics }) => {
  const { followers, views, likes } = userStatistics;

  return (
    <StatisticsContainer>
      <li>
        <Label>Followers</Label>
        <Quantity>{new Intl.NumberFormat('en-IN').format(followers)}</Quantity>
      </li>
      <li>
        <Label>Views</Label>
        <Quantity>{new Intl.NumberFormat('en-IN').format(views)}</Quantity>
      </li>
      <li>
        <Label>Likes</Label>
        <Quantity>{new Intl.NumberFormat('en-IN').format(likes)}</Quantity>
      </li>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  userStatistics: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
