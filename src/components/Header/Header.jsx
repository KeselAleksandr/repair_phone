import React, { useContext } from 'react';
import '../Header/Header.scss';
import AppContext from '../../AppContext';

function Header() {
  const { faq, range, advantage, adress, contact } = useContext(AppContext);

  const scrollToRef = (value) => {
    value.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <div className="img">
        <img src="img/logo.png" />
      </div>
      <div onClick={() => scrollToRef(contact)} className="button-head">
        <span>Обратная связь</span>
      </div>
      <div onClick={() => scrollToRef(range)} className="button-head">
        <span>Услуги</span>
      </div>
      <div onClick={() => scrollToRef(advantage)} className="button-head">
        <span>Преимущества</span>
      </div>
      <div onClick={() => scrollToRef(adress)} className="button-head">
        <span>Контакты</span>
      </div>
      <div onClick={() => scrollToRef(faq)} className="button-head">
        <span>Авторизация</span>
      </div>
    </header>
  );
}

export default Header;
