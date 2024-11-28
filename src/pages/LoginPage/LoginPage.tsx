import React, { useState } from "react";
import * as yup from "yup";
import { StyleLoginPage } from "./LogiPage.style";
import { Input } from "../../components/UI/Input/InputText";
import { Heading } from "../../components/UI/Heading/Heading";
import { Button } from "../../components/UI/Button/ButtonBox";
import { TextBackgroundBox } from "../../components/UI/TextBackgroundBox/TextBackgroundBox";
import { Linktext } from "../../components/UI/Linktext/Linktext";
import { useNavigate } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Header } from "../../components/Card/Header/Header";

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
  const [isNightMode, setIsNightMode] = useState(true);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null);

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
        setLoginError(null);
        navigate("/main-page");
      } else {
        setLoginError("Неправильный email или пароль");
      }
    } else {
      setLoginError("Такого аккаунта не существует. Зарегистрируйтесь.");
    }
  };

  return (
    <StyleLoginPage isNightMode={isNightMode}>
      <Header isNightMode={isNightMode} setIsNightMode={setIsNightMode} />
      <TextBackgroundBox>
        <Heading headingText="Авторизация" isNightMode={isNightMode} />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
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
          {loginError && <p style={{ color: isNightMode ? "red" : "darkred" }}>{loginError}</p>}
          <Linktext
            linkText="Зарегистрироваться"
            onLinkClick={() => navigate("/registration-page")}
            isNightMode={isNightMode}
          />
          <Button buttonText="Войти" type="submit" isPrimary isNightMode={isNightMode} />
        </form>
      </TextBackgroundBox>
    </StyleLoginPage>
  );
};
