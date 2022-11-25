import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductContainer = styled(Link)`
text-decoration: none;
display: flex;
flex-direction: column;
`;

export const ProductCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  width: 250px;
  height: 100%;
  min-height: 100%;
  margin: 10px;
  text-align: center;
  font-family: arial;
  background-color: white;
  border-radius: 20px;
  padding: 0px;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  transition: all 300ms ease;
  &:hover{
    transform: scale(1.04);
  }

  &:hover img{
  opacity: 0.8;
}
`;

export const ProductTitle = styled.div`
  color: black;
  font-weight: bold;
  font-variant-caps: all-small-caps;
  font-size: 25px;
  margin-bottom: 0px;
`;

export const ProductPrice = styled.div`
  font-variant-caps: all-small-caps;
  color: black;
  font-size: 20px;
  font-weight: bold;
`;

export const ProductDescription = styled.div`
  color: gray;
  font-size: 15px;
  overflow: hidden;
  height: 50px;
  text-overflow: ellipsis;
`;

export const DetailsCont = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  `;

export const ProductImage = styled.img`
  width: 250px;
  height: 200px;
  min-height: 200px;
  max-height: 200px;
  margin-bottom: 20px;
  border-radius: 20px 20px 0px 0px;
  transition: all 300ms ease;
`;

export const ProductButton = styled(Link)`
  border: none;
  outline: 0;
  border-top: 1px solid gray;
  padding: 12px;
  color: white;
  text-decoration: none;
  width: 100%;
  background-color: black;
  text-align: center;
  font-variant-caps: all-small-caps;
  cursor: pointer;
  width: 100%;
  font-weight: bold;
  margin-top: 15px;
  border-radius: 0px 0px 20px 20px;
  font-size: 18px;
  transition: all 300ms;
  &:hover {
    opacity: 0.8;
    color: white;
  }
`;
