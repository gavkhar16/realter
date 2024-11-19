import React, { useEffect, useState } from "react";
import {
  ListingsContainer,
  ListingCardContainer,
  ListingImage,
  ListingTitle,
  ListingPrice,
  LikeButton,
  PhotoGallery,
  ErrorText,
} from "./ListingCard.style";

interface Apartment {
  title?: string;
  price: string;
  location: { name: string };
  coverPhoto?: { url: string };
  photoIDs?: number[];
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
      const formattedData: Apartment[] = data.hits.map((item: any) => ({
        title: item.title || "Заголовок отсутствует",
        price: item.price || "Цена не указана",
        location: item.location[0] || { name: "Не указано" },
        coverPhoto: item.coverPhoto || null,
        photoIDs: item.photoIDs || [],
        area: item.area || 0,
        id: item.id,
      }));
      setApartments(formattedData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
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
    <ListingsContainer>
      {apartments.map((apartment: Apartment) => {
        const { title, price, location, coverPhoto, area, id } = apartment;
        const imageUrl = coverPhoto?.url || "/path/to/placeholder/image.jpg";

        return (
          <ListingCardContainer key={id}>
            <PhotoGallery>
              <ListingImage
                src={imageUrl}
                alt={title || "Изображение недоступно"}
                onError={(e) => {
                  e.currentTarget.src = "/path/to/placeholder/image.jpg";
                }}
              />
            </PhotoGallery>

            <ListingTitle>{title || "Заголовок отсутствует"}</ListingTitle>
            <ListingPrice>{price ? `${price} AED` : "Цена не указана"}</ListingPrice>
            <p>
              <strong>Местоположение:</strong> {location?.name || "Не указано"}
            </p>
            <p>
              <strong>Площадь:</strong> {area ? `${area} кв.м` : "Не указано"}
            </p>

            <LikeButton onClick={() => alert(`Добавлено в избранное: ${title}`)}>
              Лайк
            </LikeButton>
          </ListingCardContainer>
        );
      })}
    </ListingsContainer>
  );
};
