import React, { useState } from 'react';
import { StyleRegistrationPage, Form, InfoText } from './RegistrationPage.style';
import { Input } from './RegistrationPage.style';
import { Heading } from '../../components/UI/Header/Heading';
import { Button } from '../../components/UI/Button/ButtonBox';

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Добавьте логику регистрации
    console.log('Форма отправлена:', formData);
  };

  return (
    <StyleRegistrationPage>
     <Heading headingText='Регистрация' headingType='h1'/>
      <Form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          name="username" 
          placeholder="Имя пользователя" 
          value={formData.username} 
          onChange={handleInputChange} 
          required 
        />
        <Input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleInputChange} 
          required 
        />
        <Input 
          type="password" 
          name="password" 
          placeholder="Пароль" 
          value={formData.password} 
          onChange={handleInputChange} 
          required 
        />
       <Button buttonText='Зарегистрироваться'/>
      </Form>
      <InfoText>Уже есть аккаунт? Войдите здесь.</InfoText>
    </StyleRegistrationPage>
  );
};

export default RegistrationPage;
