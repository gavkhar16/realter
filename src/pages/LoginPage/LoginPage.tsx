import React from "react";
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
    console.log(data);
    navigate("/main-page");
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
          <Linktext linkText="Забыли пароль?"  onLinkClick={handleLinkClick} />
          <Button buttonText="Войти" type="submit" isPrimary />
        </form>
      </TextBackgroundBox>
    </StyleLoginPage>
  );
};
