import React, { useState } from "react";
import * as yup from "yup";
import {
  StyleRegistrationPage,
  ThemeToggleButton,
} from "./RegistrationPage.style";
import { Input } from "../../components/UI/Input/InputText";
import { Heading } from "../../components/UI/Heading/Heading";
import { Button } from "../../components/UI/Button/ButtonBox";
import { TextBackgroundBox } from "../../components/UI/TextBackgroundBox/TextBackgroundBox";
import { Linktext } from "../../components/UI/Linktext/Linktext";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

interface IRegistrationPage {
  useremail: string;
  userphone: string;
  userpassword: string;
}

const RegistrationScheme = yup.object({
  useremail: yup
    .string()
    .required("Обязательное поле")
    .email("Введите корректный email"),
  userphone: yup
    .string()
    .required("Обязательное поле")
    .matches(/^\+?[0-9]{10,15}$/, "Некорректный номер телефона"),
  userpassword: yup
    .string()
    .required("Обязательное поле")
    .min(4, "Пароль должен содержать не меньше 4 символов"),
});

export const RegistrationPage: React.FC = () => {
  const [isNightMode, setIsNightMode] = useState(true);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      useremail: "",
      userphone: "",
      userpassword: "",
    },
  });

  const onRegistrationSubmit: SubmitHandler<IRegistrationPage> = (data) => {
    console.log("Регистрация завершена:", data);
    navigate("/"); 
  };

  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <StyleRegistrationPage isNightMode={isNightMode}>
      <TextBackgroundBox>
       
        <Heading headingText="Регистрация" isNightMode={isNightMode} />


        <form onSubmit={handleSubmit(onRegistrationSubmit)}>
          <Input
            type="text"
            placeholder="Электронная почта"
            isNightMode={isNightMode}
          />
          <Input
            type="email"
            placeholder="Введите номер телефона"
            isNightMode={isNightMode}
          />
          <Input
            type="password"
            placeholder="Пароль"
            isNightMode={isNightMode}
          />
          <Linktext
          linkText="Уже есть аккаунт"
          isNightMode={isNightMode}
          onLinkClick={() => navigate("/")} 
        />
          <Button
            buttonText="Авторизоватся"
            isNightMode={isNightMode}
            isPrimary
            type="submit"
          />
        </form>
        
        <ThemeToggleButton onClick={toggleTheme}>
          {isNightMode
            ? "Переключить на дневной режим"
            : "Переключить на ночной режим"}
        </ThemeToggleButton>
      </TextBackgroundBox>
    </StyleRegistrationPage>
  );
};
