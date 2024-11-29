import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  SCarsPage,
  CardTitle,
  CardPrice,
  CardLocation,
  CardArea,
  CardImage,
} from "./CardPage.style";

interface ApartmentDetails {
  title: string;
  price: string;
  location: string;
  area: string;
  image: string;
}

export const CardPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [apartment, setApartment] = useState<ApartmentDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApartmentDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://bayut.p.rapidapi.com/properties/detail?externalID=${id}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-key": "32bf56ec321msh22e924d35442ec2p143c8djsn5be6851d36d7",
              "x-rapidapi-host": "bayut.p.rapidapi.com",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch details");
        }

        const data = await response.json();
        setApartment({
          title: data.title || "Без названия",
          price: data.price || "Цена не указана",
          location: data.location?.[0]?.name || "Местоположение не указано",
          area: data.area || "Площадь не указана",
          image: data.coverPhoto?.url || "https://via.placeholder.com/600",
        });
      } catch (err: any) {
        setError(err.message || "Ошибка загрузки данных");
      } finally {
        setLoading(false);
      }
    };

    fetchApartmentDetails();
  }, [id]);

  if (loading) {
    return <SCarsPage>Загрузка данных...</SCarsPage>;
  }

  if (error) {
    return <SCarsPage>{error}</SCarsPage>;
  }

  if (!apartment) {
    return <SCarsPage>Данные не найдены</SCarsPage>;
  }

  return (
    <SCarsPage>
      <CardTitle>{apartment.title}</CardTitle>
      <CardPrice>Цена: {apartment.price}</CardPrice>
      <CardLocation>Местоположение: {apartment.location}</CardLocation>
      <CardArea>Площадь: {apartment.area}</CardArea>
      <CardImage src={apartment.image} alt={apartment.title} />
    </SCarsPage>
  );
};
