import React, { useEffect } from 'react';
import './css/Carousel.css'

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
          <div className="item bg-[url('/img/1.jpg')]">
            <div className="content">
              <div className="author">SUPERTECH</div>
              <div className="title">IPHONE 16</div>
              <div className="category">ĐIỆN THOẠI</div>
              <div className="info">
                It is a long established fact that a reader will be distracted by the readable content of
                It is a long established fact that a reader will be distracted by the readable content of
                It is a long established fact that a reader will be distracted by the readable content of
              </div>
              <div className="button">
                <button>XEM THÊM</button>
                <button>MUA NGAY</button>
              </div>
            </div>
          </div>

          <div className="item bg-[url('/img/2.jpg')]">
            <div className="content">
              <div className="author">SUPERTECH</div>
              <div className="title">IPHONE 16</div>
              <div className="category">ĐIỆN THOẠI</div>
              <div className="info">
                It is a long established fact that a reader will be distracted by the readable content of
                It is a long established fact that a reader will be distracted by the readable content of
                It is a long established fact that a reader will be distracted by the readable content of
              </div>
              <div className="button">
                <button>XEM THÊM</button>
                <button>MUA NGAY</button>
              </div>
            </div>
          </div>

          <div className="item bg-[url('/img/3.jpg')]">
            <div className="content">
              <div className="author">SUPERTECH</div>
              <div className="title">IPHONE 16</div>
              <div className="category">ĐIỆN THOẠI</div>
              <div className="info">
                It is a long established fact that a reader will be distracted by the readable content of
                It is a long established fact that a reader will be distracted by the readable content of
                It is a long established fact that a reader will be distracted by the readable content of
              </div>
              <div className="button">
                <button>XEM THÊM</button>
                <button>MUA NGAY</button>
              </div>
            </div>
          </div>

          <div className="item bg-[url('/img/4.jpg')]">
            <div className="content">
              <div className="author">SUPERTECH</div>
              <div className="title">IPHONE 16</div>
              <div className="category">ĐIỆN THOẠI</div>
              <div className="info">
                It is a long established fact that a reader will be distracted by the readable content of
                It is a long established fact that a reader will be distracted by the readable content of
                It is a long established fact that a reader will be distracted by the readable content of
              </div>
              <div className="button">
                <button>XEM THÊM</button>
                <button>MUA NGAY</button>
              </div>
            </div>
          </div>

          <div className="item bg-[url('/img/5.jpg')]">
            <div className="content">
              <div className="author">SUPERTECH</div>
              <div className="title">IPHONE 16</div>
              <div className="category">ĐIỆN THOẠI</div>
              <div className="info">
                It is a long established fact that a reader will be distracted by the readable content of
                It is a long established fact that a reader will be distracted by the readable content of
                It is a long established fact that a reader will be distracted by the readable content of
              </div>
              <div className="button">
                <button>XEM THÊM</button>
                <button>MUA NGAY</button>
              </div>
            </div>
          </div>
        </div>

        <div className="arrows">
          <button id="next" onClick={handleNextClick}>TIẾP TỤC</button>
          <div className="lines"></div>
          <div className="numberSilder">
            <div className="listnumber">
              <div className="number">01</div>
              <div className="number">02</div>
              <div className="number">03</div>
              <div className="number">04</div>
              <div className="number">05</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Carousel;
