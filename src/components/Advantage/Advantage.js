import React from 'react';
import '../Advantage/Advantage.scss';

function Advantage() {
  return (
    <div id="overview">
      <h1>Преимущества</h1>
      <div className="block-adv">
        <img src="/img/diagnostic.jpg" alt="diagnostic" />
        <h3>Бесплатная диагностика</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores
          debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora
          laudantium culpa nostrum, quidem, quasi ratione itaque nam.
        </p>
      </div>
      <div className="block-adv">
        <img src="/img/time.jpg" alt="quality" />
        <h3>Время выполнения заказа</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores
          debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora
          laudantium culpa nostrum, quidem, quasi ratione itaque nam.
        </p>
      </div>
      <div className="block-adv">
        <img src="/img/quality.jpg" alt="time" />
        <h3>Качество</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores
          debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora
          laudantium culpa nostrum, quidem, quasi ratione itaque nam.
        </p>
      </div>
      <div className="block-adv">
        <img src="/img/garant.jpg" alt="garant" />
        <h3>Гарантийная политика</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores
          debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora
          laudantium culpa nostrum, quidem, quasi ratione itaque nam.
        </p>
      </div>
    </div>
  );
}

export default Advantage;
