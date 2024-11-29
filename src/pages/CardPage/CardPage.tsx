import React from "react";
import { useLocation } from "react-router-dom";
import {
  SCarsPage,
  CardTitle,
  CardPrice,
  CardLocation,
  CardArea,
  CardImage,
} from "./CardPage.style";

export const CardPage: React.FC = () => {
  const location = useLocation();
  const apartment = location.state;

  if (!apartment) {
    return <SCarsPage>Данные отсутствуют</SCarsPage>;
  }

  return (
    <SCarsPage>
      <CardTitle>{apartment.title}</CardTitle>
      <CardPrice>Цена: {apartment.price} AED</CardPrice>
      <CardLocation>Расположение: {apartment.location}</CardLocation>
      <CardArea>Площадь: {apartment.area}</CardArea>
      {apartment.coverPhoto && (
        <CardImage
          src={apartment.coverPhoto.url}
          alt={apartment.coverPhoto.title || "Изображение"}
        />
      )}
    </SCarsPage>
  );
};
