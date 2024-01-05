import React, { useState } from 'react';
import '../Slider/Slider.scss';

function Slider() {
  const [value, setValue] = useState(2);

  const prewItem = () => {
    setValue(value - 1);
  };

  const nextItem = () => {
    setValue(value + 1);
  };

  return (
    <div className="blockSlider">
      {value === 1 ? (
        <div className="btn_prev" />
      ) : (
        <button onClick={prewItem} className="btn_prev">
          <img src="img/prew.png" alt="prew" />
        </button>
      )}

      <img className="slider" src={`img/sliderImg/${value}.jpg`}></img>
      {value === 3 ? (
        <div className="btn_next" />
      ) : (
        <button onClick={nextItem} className="btn_next">
          <img src="img/next.png" alt="next" />
        </button>
      )}
    </div>
  );
}

export default Slider;
