import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  margin-bottom: 30px;
  width: 300px;
  padding-top: 30px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%);
`;
export const Description = styled.div`
  font-weight: 400;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Avatar = styled.img`
  width: 130px;
  border-radius: 50%;
  border: 1px solid rgba(200, 200, 200, 0.5);
  margin-bottom: 20px;
`;
export const UserName = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 20px;
`;
export const UserTag = styled.p`
  color: #818f9d;
  margin-bottom: 10px;
`;
export const Location = styled.p`
  color: #818f9d;
`;
