import styled from 'styled-components';
import {Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PictureThumb = styled.div``;

export const Button = styled(Link)`
  margin-bottom: 10px;
  margin-top: 10px;
  color: black;
  font-weight: bold;
  padding: 5px;
  text-decoration: none;
  border: 3px solid black;
  border-radius: 5px;
  margin-left: 30px;
  margin-right: auto;

  :hover {
    background-color: green;
    color: white;
    border: 3px solid green;
  }
`;

export const Card = styled.article`
  display: flex;
`;

export const Picture = styled.img`
  margin-top: 10px;
  margin-left: 10px;
`;

export const MovieTitle = styled.h1`
  font-size: 48px;
`;

export const InfoList = styled.ul`
  list-style: none;
  margin: 0;
`;

export const ListItem = styled.li`
  font-size: 24px;
  font-weight: bold;
  margin: 16px 0;
`;

export const Info = styled.span`
  font-weight: normal;
`;

export const InfoLink = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  font-weight: bold;
  color: blue;

  :hover,
  :focus {
    background-color: #d9d9d9;
    border-radius: 5px;
  }
`;

export const AdditionalInfoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  width: 300px;
  justify-content: space-evenly;
`;

export const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 0;
`;
