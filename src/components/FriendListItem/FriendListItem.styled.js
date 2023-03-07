import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 0;
  background-color: #fff;
  box-shadow: 0px 1px 3px 3px rgb(0 0 0 / 12%), 0px 2px 2px 0px rgb(0 0 0 / 50%);

  & + & {
    margin-top: 10px;
  }
`;

const setStatus = ({ status }) => {
  if (status) {
    return '#4baf51';
  }
  return '#fd5256';
};

export const Status = styled.span`
  background-color: ${setStatus};
  border-radius: 50%;
  height: 15px;
  width: 15px;
  margin: 0 10px;
`;

export const Avatar = styled.img`
  margin-right: 10px;
  padding: 5px;
  border-radius: 5px;
  background-color: #3db9b9;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
`;
