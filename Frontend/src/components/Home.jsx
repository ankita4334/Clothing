import React, { useState } from 'react';

const Home = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Switzerland',
      des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus et eveniet voluptatem! Ad quo neque accusamus tempora, maiores quam, est explicabo ducimus dolor alias quibusdam quia quod. Ab, ratione eos.',
      image: 'images/1.jpg'
    },
    {
      id: 2,
      name: 'iceland',
      des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus et eveniet voluptatem! Ad quo neque accusamus tempora, maiores quam, est explicabo ducimus dolor alias quibusdam quia quod. Ab, ratione eos.',
      image: 'images/2.jpg'
    },
    {
      id: 3,
      name: 'finland',
      des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus et eveniet voluptatem! Ad quo neque accusamus tempora, maiores quam, est explicabo ducimus dolor alias quibusdam quia quod. Ab, ratione eos.',
      image: 'images/3.jpg'
    },
    {
      id: 4,
      name: 'Austalia',
      des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus et eveniet voluptatem! Ad quo neque accusamus tempora, maiores quam, est explicabo ducimus dolor alias quibusdam quia quod. Ab, ratione eos.',
      image: 'images/1.jpg'
    },
    {
      id: 5,
      name: 'netherland',
      des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus et eveniet voluptatem! Ad quo neque accusamus tempora, maiores quam, est explicabo ducimus dolor alias quibusdam quia quod. Ab, ratione eos.',
      image: 'images/5.jpg'
    }
  ]);

  const handleNext = () => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      const firstItem = newItems.shift();
      newItems.push(firstItem);
      return newItems;
    });
  };

  const handlePrev = () => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      const lastItem = newItems.pop();
      newItems.unshift(lastItem);
      return newItems;
    });
  };

  return (
    <div className="container">
      <div className="slide">
        {items.map((item) => (
          <div 
            className="item" 
            key={item.id}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.des}</div>
              <button>See More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="button">
        <button className="prev" onClick={handlePrev}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next" onClick={handleNext}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Home;