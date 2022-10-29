import React from 'react';
import {
  CategoryCard,
  CategoryImage,
  CategoryTitle,
} from './styles';

export const ProductCart = ({ name, image }) => {
  return (
    <CategoryCard>
      <CategoryImage src={image}></CategoryImage>
      <CategoryTitle>{name}</CategoryTitle>
    </CategoryCard>
  );
};
