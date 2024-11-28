import React, { useState } from "react";
import { MainPageContainer } from "./MainPage.style";
import { ListingCard } from "../../components/UI/ListingCard/ListingCard";
import Heading from "../../components/UI/Heading/Heading";
import { Header } from "../../components/Card/Header/Header";

export const MainPage: React.FC = () => {
  const [isNightMode, setIsNightMode] = useState(true);

  return (
    <MainPageContainer isNightMode={isNightMode}>
      <Header isNightMode={isNightMode} setIsNightMode={setIsNightMode} />
      <Heading
        headingText="Недвижимость в Абу-Даби"
        headingType="h1"
        isNightMode={isNightMode}
      />
      <ListingCard />
    </MainPageContainer>
  );
};
