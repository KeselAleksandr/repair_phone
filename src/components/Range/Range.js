import React, { useEffect, useState } from 'react';
import '../Range/Range.scss';
import { useInView } from 'react-intersection-observer';

function Range({ id }) {
  const [active, setActive] = useState(false);
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    const elem = document.querySelector('.item-head');
    const position = elem.getBoundingClientRect();
    id = position;
    if (inView) {
      setActive(!active);
    }
  }, [inView]);

  return (
    <div className="range">
      <div ref={ref} className="item-head">
        <h2>Ремонт телефонов</h2>
        <div className={`item-left ${active ? 'active-left' : ''}`}>
          <h3>Замена модуля</h3>
        </div>
        <div className={`item-right ${active ? 'active-right' : ''}`}>
          <h3>Замена и ремонт разъемов</h3>
        </div>
        <div className={`item-left ${active ? 'active-left' : ''}`}>
          <h3>Замена модуля</h3>
        </div>
        <div className={`item-right ${active ? 'active-right' : ''}`}>
          <h3>Замена и ремонт разъемов</h3>
        </div>
        <div className={`item-left ${active ? 'active-left' : ''}`}>
          <h3>Замена модуля</h3>
        </div>
        <div className={`item-right ${active ? 'active-right' : ''}`}>
          <h3>Замена и ремонт разъемов</h3>
        </div>
        <div className={`item-left ${active ? 'active-left' : ''}`}>
          <h3>Замена модуля</h3>
        </div>
        <div className={`item-right ${active ? 'active-right' : ''}`}>
          <h3>Замена и ремонт разъемов</h3>
        </div>
      </div>
      <div className="item-head">
        <h2>Ремонт переферии</h2>
        <div className={`item-left ${active ? 'active-left' : ''}`}>
          <h3>Замена модуля</h3>
        </div>
        <div className={`item-right ${active ? 'active-right' : ''}`}>
          <h3>Замена и ремонт разъемов</h3>
        </div>
      </div>
    </div>
  );
}

export default Range;
