import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  list-style: none;
  padding-left: 0;
`;

export const ListItem = styled.li`
  max-width: 230px;
  padding: 5px;
`;

export const Image = styled.img`
  width: 230px;
  height: 345px;
`;

export const ActorName = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 12px 0;
`;

export const Info = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

export const InfoText = styled.span`
  font-weight: normal;
  color: blue;
`;
