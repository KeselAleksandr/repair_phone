import React, { useEffect, useRef } from 'react';
import '../Faq/Faq.scss';

function Faq({ setFaq }) {
  const ulRef = useRef();

  useEffect(() => {
    setFaq(ulRef);
  }, []);
  return (
    <div ref={ulRef} id="faq">
      <div>
        <span class="title">Оплата</span>
        <br />
        <span class="heading">Как будет проходит оплата?</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores
          debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora
          laudantium culpa nostrum, quidem, quasi ratione itaque nam.
        </p>
      </div>
      <div>
        <span class="title">Информация</span>
        <br />
        <span class="heading">Что входит в услуги сервиса</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores
          debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora
          laudantium culpa nostrum, quidem, quasi ratione itaque nam.
        </p>
      </div>
      <div>
        <span class="title">Гарантии</span>
        <br />
        <span class="heading">Какие гарантии есть</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores
          debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora
          laudantium culpa nostrum, quidem, quasi ratione itaque nam.
        </p>
      </div>
    </div>
  );
}

export default Faq;
