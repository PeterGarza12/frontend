import React from 'react';
import {
  CategoryCard,
  CategoryImage,
  CategoryTitle,
} from './styles';

export const Category = ({ id, name, image }) => {
  image = "http://localhost:8080/"+image;
  return (
    <CategoryCard to={`/menu/${id}`}>
      <CategoryImage src={image}></CategoryImage>
      <CategoryTitle>{name}</CategoryTitle>
    </CategoryCard>
  );
};
