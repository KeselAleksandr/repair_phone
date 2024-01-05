import React, { useEffect, useRef } from 'react';
import './Adress.scss';

function Adress({ setAdress }) {
  const ulRef = useRef();

  useEffect(() => {
    setAdress(ulRef);
  }, []);

  return (
    <div ref={ulRef} className="adress">
      <h1>Контакты</h1>
      <div className="block-contact">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores
        debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora
        laudantium culpa nostrum, quidem, quasi ratione itaque nam.
      </div>
      <div className="block-contact">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores
        debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora
        laudantium culpa nostrum, quidem, quasi ratione itaque nam.
      </div>
      <div className="block-contact">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores
        debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora
        laudantium culpa nostrum, quidem, quasi ratione itaque nam.
      </div>
    </div>
  );
}

export default Adress;
