import React, { useState } from "react";
import { Button } from "../../components/UI/Button/ButtonBox";
import * as yup from "yup";
import { Heading } from "../../components/UI/Heading/Heading";
import { Input } from "../../components/UI/Input/InputText";
import { StyleLoginPage } from "./LogiPage.style";
import { TextBackgroundBox } from "../../components/UI/TextBackgroundBox/TextBackgroundBox";
import { Linktext } from "../../components/UI/Linktext/Linktext";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

interface ILoginForm {
  useremail: string;
  userpassword: string;
}

const loginFormScheme = yup.object({
  useremail: yup
    .string()
    .required("Обязательное поле")
    .email("Введите корректный email"),
  userpassword: yup
    .string()
    .required("Обязательное поле")
    .min(4, "Пароль должен содержать не меньше 4 символов"),
});

export const LoginPage = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null); // Для отображения ошибок

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginFormScheme),
    defaultValues: {
      useremail: "",
      userpassword: "",
    },
  });

  const onLoginSubmit: SubmitHandler<ILoginForm> = (data) => {
    const storedUser = localStorage.getItem("userData");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      if (
        parsedUser.useremail === data.useremail &&
        parsedUser.userpassword === data.userpassword
      ) {
        setLoginError(null); // Сброс ошибки
        console.log("Вход выполнен");
        navigate("/main-page");
      } else {
        setLoginError("Неправильный email или пароль");
      }
    } else {
      setLoginError("Такого аккаунта не существует. Зарегистрируйтесь.");
    }
  };

  const handleLinkClick = () => {
    navigate("/registration-page");
  };

  return (
    <StyleLoginPage>
      <TextBackgroundBox>
        <Heading headingText="Авторизация" headingType="h1" />
        <form onSubmit={handleSubmit(onLoginSubmit)} action="#">
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Введите свою электронную почту"
                errorText={errors.useremail?.message}
                isError={!!errors.useremail}
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
                {...field}
              />
            )}
          />
          {loginError && <p style={{ color: "red" }}>{loginError}</p>}
          <Linktext linkText="Зарегистрироватся" onLinkClick={handleLinkClick} />
          <Button buttonText="Войти" type="submit" isPrimary />
        </form>
      </TextBackgroundBox>
    </StyleLoginPage>
  );
};
