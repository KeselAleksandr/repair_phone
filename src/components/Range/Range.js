import React, { useEffect, useRef, useState } from 'react';
import '../Range/Range.scss';

function Range({ setRange }) {
  const [active, setActive] = useState(false);
  const ulRef = useRef();
  useEffect(() => {
    setRange(ulRef);
  }, []);

  return (
    <div ref={ulRef} className="range">
      <div className="item-head">
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
