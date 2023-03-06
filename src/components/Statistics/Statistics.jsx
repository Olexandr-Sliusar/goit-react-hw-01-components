import PropTypes from 'prop-types';
import {
  Container,
  Title,
  StatList,
  StatListItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, data }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <StatList>
        {data.map(({ id, label, percentage }) => (
          <StatListItem key={id}>
            <Label>{label}</Label>
            <Percentage>
              {new Intl.NumberFormat('en-IN', { style: 'percent' }).format(
                percentage / 100,
              )}
            </Percentage>
          </StatListItem>
        ))}
      </StatList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
