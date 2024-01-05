import React from 'react';
import '../Contact/Contact.scss';

function Contact() {
  return (
    <div id="contacts">
      <center>
        <h5>Обратная связь</h5>
      </center>
      <form id="form_input">
        <label for="name">
          Имя <span>*</span>
        </label>
        <br />
        <input type="text" placeholder="Введите имя" name="name" id="name" />
        <br />
        <label for="email">
          Ваш телефон <span>*</span>
        </label>
        <br />
        <input type="email" placeholder="Введите телефон" name="email" id="email" />
        <br />
        <label for="message">
          Сообщение <span>*</span>
        </label>
        <br />
        <textarea placeholder="Введите ваше сообщение" name="message" id="message"></textarea>
        <br />
        <div id="mess_send" class="btn">
          Отправить
        </div>
      </form>
    </div>
  );
}

export default Contact;
