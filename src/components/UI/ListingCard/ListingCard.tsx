import React, { useEffect, useState } from "react";
import {
  ListingsContainer,
  ListingCardContainer,
  ListingImage,
  ListingTitle,
  ListingPrice,
  LikeButton,
  ErrorText,
  PaginationContainer,
  PaginationButton,
  Loader,
} from "./ListingCard.style";

interface Apartment {
  id: string;
  title: string;
  price: string;
  coverPhoto?: { url: string; title?: string };
}

export const ListingCard: React.FC = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  const fetchApartmentData = async () => {
    const url = 'https://bayut.p.rapidapi.com/auto-complete?query=abu%20dhabi&hitsPerPage=25&page=0&lang=en';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd4402c0024mshda7bbc52c603153p19062djsna8067e4643ff',
		'x-rapidapi-host': 'bayut.p.rapidapi.com'
	}
};

    try {
      setLoading(true);
      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        // Проверка структуры ответа API
        setApartments(
          data.hits.map((hit: any) => ({
            id: hit.id,
            title: hit.title || "Название не указано",
            price: hit.price || "Цена не указана",
            coverPhoto: hit.coverPhoto || null,
          }))
        );
        setLoading(false);
      } else {
        throw new Error("Ошибка при загрузке данных с API");
      }
    } catch (error: any) {
      setError(error.message || "Произошла ошибка");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApartmentData();
  }, []);

  const totalPages = Math.ceil(apartments.length / itemsPerPage);

  const currentApartments = apartments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) {
    return (
      <Loader>
        <div className="loader"></div>
      </Loader>
    );
  }

  if (error) {
    return <ErrorText>{error}</ErrorText>;
  }

  if (apartments.length === 0) {
    return <ErrorText>Нет доступных объектов недвижимости.</ErrorText>;
  }

  return (
    <>
      <ListingsContainer>
        {currentApartments.map((apartment) => (
          <ListingCardContainer key={apartment.id}>
            <ListingTitle>{apartment.title}</ListingTitle>
            <ListingPrice>price: {apartment.price}</ListingPrice>
            {apartment.coverPhoto ? (
              <ListingImage
                src={apartment.coverPhoto.url}
                alt={apartment.coverPhoto.title || "Изображение"}
              />
            ) : (
              <ErrorText>Фото отсутствует</ErrorText>
            )}
            <LikeButton>♡ Добавить в избранное</LikeButton>
          </ListingCardContainer>
        ))}
      </ListingsContainer>
      <PaginationContainer>
        <PaginationButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Назад
        </PaginationButton>
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationButton
            key={index}
            onClick={() => handlePageChange(index + 1)}
            isActive={currentPage === index + 1}
          >
            {index + 1}
          </PaginationButton>
        ))}
        <PaginationButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Вперёд
        </PaginationButton>
      </PaginationContainer>
    </>
  );
};
