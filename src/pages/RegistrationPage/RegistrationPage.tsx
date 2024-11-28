import React, { useState } from "react";
import * as yup from "yup";
import {
  StyleRegistrationPage,
} from "./RegistrationPage.style";
import { Input } from "../../components/UI/Input/InputText";
import { Heading } from "../../components/UI/Heading/Heading";
import { Button } from "../../components/UI/Button/ButtonBox";
import { TextBackgroundBox } from "../../components/UI/TextBackgroundBox/TextBackgroundBox";
import { Linktext } from "../../components/UI/Linktext/Linktext";
import { useNavigate } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Header } from "../../components/Card/Header/Header";

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
  } = useForm<IRegistrationPage>({
    resolver: yupResolver(RegistrationScheme),
    defaultValues: {
      useremail: "",
      userphone: "",
      userpassword: "",
    },
  });

  const onRegistrationSubmit: SubmitHandler<IRegistrationPage> = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
    navigate("/"); // Перенаправление на страницу входа
  };

  return (
    <StyleRegistrationPage isNightMode={isNightMode}>
      <Header isNightMode={isNightMode} setIsNightMode={setIsNightMode} />
      <TextBackgroundBox>
        <Heading headingText="Регистрация" isNightMode={isNightMode} />
        <form onSubmit={handleSubmit(onRegistrationSubmit)}>
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Введите свою электронную почту"
                errorText={errors.useremail?.message}
                isError={!!errors.useremail}
                isNightMode={isNightMode}
                {...field}
              />
            )}
          />
          <Controller
            name="userphone"
            control={control}
            render={({ field }) => (
              <Input
                type="tel"
                placeholder="Введите номер телефона"
                errorText={errors.userphone?.message}
                isError={!!errors.userphone}
                isNightMode={isNightMode}
                {...field}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Введите свой пароль"
                errorText={errors.userpassword?.message}
                isError={!!errors.userpassword}
                isNightMode={isNightMode}
                {...field}
              />
            )}
          />
          <Linktext
            linkText="Уже есть аккаунт?"
            onLinkClick={() => navigate("/")}
            isNightMode={isNightMode}
          />
          <Button buttonText="Зарегистрироваться" type="submit" isPrimary isNightMode={isNightMode} />
        </form>
      </TextBackgroundBox>
    </StyleRegistrationPage>
  );
};

