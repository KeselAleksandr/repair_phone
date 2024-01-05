import React from 'react';
import '../Header/Header.scss';

function Header() {
  const massButton = ['Обратная связь', 'Услуги', 'Преимущества', 'Контакты', 'Авторизация'];
  return (
    <header>
      <div className="img">
        <img src="img/logo.png" />
      </div>
      <div className="button-head">
        <span>Обратная связь</span>
      </div>
      <div className="button-head">
        <span>Услуги</span>
      </div>
      <div className="button-head">
        <span>Преимущества</span>
      </div>
      <div className="button-head">
        <span>Контакты</span>
      </div>
      <div className="button-head">
        <span>Авторизация</span>
      </div>
    </header>
  );
}

export default Header;
