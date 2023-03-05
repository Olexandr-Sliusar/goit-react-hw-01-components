import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  width: 300px;
  // outline: 2px dashed #8ad9ff;
  background-color: #f3f6f9;
  list-style-type: none;

  li {
    display: flex;
    flex-basis: calc(100% / 3);
    align-items: center;
    flex-direction: column;

    border: solid 1px #e5eaf1;
    padding: 20px 0;
  }
`;
export const Label = styled.span`
  color: #818f9d;
  font-weight: 400;
  margin-bottom: 5px;
`;
export const Quantity = styled.span`
  font-weight: 700;
`;
