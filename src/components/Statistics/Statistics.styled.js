import styled from '@emotion/styled';

export const Container = styled.section`
  width: 500px;
  margin: 0 0 30px;
  background-color: #fff;
  font-size: 14px;
  font-weight: 400;
`;

export const Title = styled.h2`
  font-size: 22px;
  text-transform: uppercase;
  text-align: center;
  padding: 25px 0;
  border: solid 1px #e5eaf1;
  font-weight: 700;
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

const setBgColor = () => {
  return `#${Math.floor(Math.random() * 16777214)
    .toString(16)
    .padStart(6, '0')}`;
};

export const StatListItem = styled.li`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 5);
  background-color: ${setBgColor};
  color: #ffffff;
  padding: 10px 0 20px;

  &:first-child {
    border-bottom-left-radius: 5px 5px;
  }

  &:last-child {
    border-bottom-right-radius: 5px 5px;
  }
`;

export const Label = styled.span`
  margin-bottom: 10px;
`;
export const Percentage = styled.span`
  font-size: 22px;
`;
