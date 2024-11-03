import { Button } from "../../components/UI/Button/ButtonBox";
import { Heading } from "../../components/UI/Header/Header";
import { Input } from "../../components/UI/Input/InputText";
import { StyleLoginPage } from "./LogiPage.style";
import { TextBackgroundBox } from "../../components/UI/TextBackgroundBox/TextBackgroundBox";
import { Linktext } from "../../components/UI/Linktext/Linktext";

export const LoginPage = () => {
  return (
    <StyleLoginPage>
      <TextBackgroundBox>
        <Heading headingText="Авторизация" headingType="h1" />
        <Input type="text" placeholder="Введите свою электронную почту" />
        <Input type="password" placeholder="Введите свой пароль" />{" "}
        <Linktext linkText="Забыли пароль?" />
        <Button buttonText="Войти" />
      </TextBackgroundBox>
    </StyleLoginPage>
  );
};
