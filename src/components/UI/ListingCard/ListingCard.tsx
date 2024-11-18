import React, { useEffect, useState } from "react";
import {
  ListingCardContainer,
  ListingImage,
  ListingTitle,
  ListingPrice,
  LikeButton,
} from "./ListingCard.style";

interface Apartment {
  title: string;
  price: string;
  location: { name: string };
  coverPhoto: { url: string };
  area: number;
  id: number;
}

export const ListingCard: React.FC = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchApartmentData = async () => {
    const url =
      "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b3f4229913msh1a673e0076f1bf5p1edb96jsndf258c684c9a",
        "x-rapidapi-host": "bayut.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok) {
        setApartments(data.hits || []); // Обновляем список квартир
      } else {
        throw new Error("Ошибка при загрузке данных");
      }
    } catch (error: any) {
      setError(error.message); // Устанавливаем ошибку
    } finally {
      setLoading(false); // Завершаем состояние загрузки
    }
  };

  useEffect(() => {
    fetchApartmentData();
  }, []);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  if (apartments.length === 0) {
    return <p>Нет доступных квартир.</p>;
  }

  return (
    <>
      {apartments.map((apartment) => {
        const { title, price, location, coverPhoto, area, id } = apartment;

        return (
          <ListingCardContainer key={id}>
            {/* Отображение фото квартиры */}
            {coverPhoto && coverPhoto.url ? (
              <ListingImage src={coverPhoto.url} alt={title} />
            ) : (
              <p>Фото не доступно</p>
            )}

            {/* Детали квартиры */}
            <ListingTitle>{title}</ListingTitle>
            <ListingPrice>{price ? `${price} AED` : "Цена не указана"}</ListingPrice>
            <p><strong>Местоположение:</strong> {location?.name || "Не указано"}</p>
            <p><strong>Площадь:</strong> {area ? `${area} кв.м` : "Не указано"}</p>

            {/* Кнопка лайка */}
            <LikeButton onClick={() => alert(`Добавлено в избранное: ${title}`)}>
              Лайк
            </LikeButton>
          </ListingCardContainer>
        );
      })}
    </>
  );
};
