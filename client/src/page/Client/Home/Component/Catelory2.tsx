import React from 'react';
import { NavLink } from 'react-router-dom';

const categories = [
  { name: 'Laptop', image: 'https://th.bing.com/th/id/R.8593980719357abc021e94c5524207ca?rik=Ghr77UIYArniOQ&pid=ImgRaw&r=0', colSpan: 1, rowSpan: 2 ,idDad:1},
  { name: 'Điện thoại', image: 'https://th.bing.com/th/id/R.fe521fc082526d2881fabcaf9147d651?rik=ilc%2bV%2bCKcgdfIg&pid=ImgRaw&r=0', colSpan: 1, rowSpan: 1,idDad:2 },
  { name: 'Sạc dự phòng', image: 'https://t.ctcdn.com.br/kizy-zFscU7eCIBBRz8XCeZDXjE=/1024x0/smart/i484174.png', colSpan: 1, rowSpan: 1 },
  { name: 'Máy tính bảng', image: 'https://www.pngall.com/wp-content/uploads/5/Apple-IPad-PNG-Image-HD.png', colSpan: 1, rowSpan: 2 },
  { name: 'Chuột máy tính', image: 'https://th.bing.com/th/id/OIP.F-oj7W9agXsYpwPuxlXjtwHaHa?w=181&h=181&c=7&r=0&o=5&pid=1.7', colSpan: 1, rowSpan: 1 },
  { name: 'Ốp lưng', image: 'https://th.bing.com/th/id/OIP.CopU5NdijRQZ36epw0KRCgHaIR?rs=1&pid=ImgDetMain', colSpan: 1, rowSpan: 1 },
  { name: 'Tai nghe', image: 'https://th.bing.com/th/id/R.3caed4d5f3b3192d5a6436c71e6e4453?rik=942IYZiNkQRlvw&pid=ImgRaw&r=0', colSpan: 1, rowSpan: 1 },
  { name: 'Bàn phím', image: 'https://th.bing.com/th/id/R.ea090968624c811d3798b63fb40b6df2?rik=VvP8j0vDhEupww&riu=http%3a%2f%2frpw.rapoo.cn%2fgoods%2fgallery%2f1603715291511.jpg&ehk=vc46IoYzxJdgRA51Gm%2bV%2frzk9co%2fw8GtfcC6KlVPzwI%3d&risl=&pid=ImgRaw&r=0', colSpan: 1, rowSpan: 1 },
];

const Catelory2: React.FC = () => {
  return (
    <div className="py-10 rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
        {categories.map((category, index) => (
            <NavLink 
            to={`/list-sản-phẩm?category_dad=${category.idDad}`}
            key={index}
            className={`flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md transition-all duration-200 ${
                category.rowSpan === 2 ? 'row-span-2 hover:scale-105 hover:shadow-lg' : 'hover:scale-105 hover:shadow-lg'
            }`}
            >
            <p className="justify-left font-medium my-5 text-xl sm:text-2xl md:text-3xl">{category.name}</p>
            <img 
              src={category.image} 
              alt={category.name} 
              className={`object-contain m-[3rem] ${
                category.rowSpan === 2 ? 'w-full h-[70%]' : 'w-[60%] h-[55%] m-10 '
              }`} 
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Catelory2;
