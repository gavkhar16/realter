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
  id: string;
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

        // Настроить запрос на API с использованием ID
        const url = `https://bayut.p.rapidapi.com/properties/detail?externalID=${id}`;
        const options = {
          method: "GET",
          headers: {
            "x-rapidapi-key": "32bf56ec321msh22e924d35442ec2p143c8djsn5be6851d36d7",
            "x-rapidapi-host": "bayut.p.rapidapi.com",
          },
        };

        const response = await fetch(url, options);
        const data = await response.json();

        if (response.ok) {
          setApartment({
            id: data.id,
            title: data.title || "Название не указано",
            price: data.price || "Цена не указана",
            location: data.location || "Местоположение не указано",
            area: data.area || "Площадь не указана",
            image: data.coverPhoto?.url || "https://via.placeholder.com/600",
          });
        } else {
          throw new Error("Ошибка при загрузке данных");
        }
      } catch (err: any) {
        setError(err.message || "Не удалось загрузить данные");
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
