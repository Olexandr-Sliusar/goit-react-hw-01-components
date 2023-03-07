import styled from '@emotion/styled';

export const Transactions = styled.table`
  margin-bottom: 30px;
  width: 500px;
  text-align: center;
  font-size: 14px;
  box-shadow: 0px 1px 1px 0px rgb(0 0 0 / 50%);
`;

export const TableHead = styled.thead`
  background-color: #00bcd5;
  color: #ffffff;
  text-transform: uppercase;
  & th {
    padding: 10px 0;
  }
`;
export const TabletBody = styled.tbody`
  color: #858b8f;
  & tr:nth-child(2n) {
    background-color: #ecf1f4;
  }

  & tr:nth-child(2n + 1) {
    background-color: #ffffff;
  }
  & td {
    padding: 10px 0;
  }
  & .first-letter:first-letter {
    text-transform: uppercase;
  }
`;
