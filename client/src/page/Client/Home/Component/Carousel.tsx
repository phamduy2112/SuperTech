import React, { useEffect } from 'react';
import './css/Carousel.css'
import { DataSlideShow } from './DataSlideShow';

function Carousel() {
  const handleNextClick = () => {
    const items = document.querySelectorAll<HTMLDivElement>('.item');
    const numbers = document.querySelectorAll<HTMLDivElement>('.number');

    if (items.length > 0 && numbers.length > 0) {
      document.querySelector('.frameSlide')?.appendChild(items[0]);
      document.querySelector('.listnumber')?.appendChild(numbers[0]);

      const backgroundImage = window.getComputedStyle(items[0]).backgroundImage;
      const carousel = document.querySelector('.carousel') as HTMLElement;
      carousel.style.backgroundImage = backgroundImage;
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 7000);
    return () => clearInterval(intervalId);
  }, []);



  return (
    <div className='w-full flex items-center py-[60px] justify-center'>
      <div className="carousel">
        <div className="frameSlide">
          {
            DataSlideShow.map((item, index) => (
              <div key={index} className="item" style={{ backgroundImage: `url(${item.image})` }}>

                <div className="content">
                  <div className="author">{item.author}</div>
                  <div className="title">{item.title}</div>
                  <div className="category">{item.category}</div>
                  <div className="info">
                    {item.info}
                  </div>
                  <div className="button">
                    <button>XEM THÊM</button>
                    <button>MUA NGAY</button>
                  </div>
                </div>
              </div>
            ))
          }



        </div>

        <div className="arrows">
          <button className='hover:bg-[blueviolet] transition-all duration-700' id="next" onClick={handleNextClick}>TIẾP TỤC</button>
          <div className="lines"></div>
          <div className="numberSilder">
            <div className="listnumber">
              {
                DataSlideShow.map((item, index) => (
                  <div key={index} className="number">{item.id}</div>
                ))

              }
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Carousel;
