import React, { useState } from "react";
import {
  CardPageContainer,
  CardItem,
  ThemeToggleButton,
} from "./CardPage.style";
import { Heading } from "../../components/UI/Heading/Heading";
import { Button } from "../../components/UI/Button/ButtonBox";
import { Linktext } from "../../components/UI/Linktext/Linktext";

interface CardProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface CardPageProps {
  cards: CardProps[];
}

export const CardPage: React.FC<CardPageProps> = ({ cards }) => {
  const [isNightMode, setIsNightMode] = useState(true);

  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <CardPageContainer isNightMode={isNightMode}>
      <Heading headingText="Карточки" isNightMode={isNightMode} />
      {cards.map((card) => (
        <CardItem key={card.id} isNightMode={isNightMode}>
          <img src={card.image} alt={card.title} style={{ width: "100px" }} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <Button buttonText="Подробнее" isNightMode={isNightMode} isPrimary />
          <Linktext
            linkText="Узнать больше"
            isNightMode={isNightMode}
            onLinkClick={() => { /* navigate to details page */ }}
          />
        </CardItem>
      ))}
      <ThemeToggleButton onClick={toggleTheme}>
        {isNightMode ? "Переключить на дневной режим" : "Переключить на ночной режим"}
      </ThemeToggleButton>
    </CardPageContainer>
  );
};
