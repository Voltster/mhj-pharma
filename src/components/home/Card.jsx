import React from 'react';
import CardData from './CardData';

import contract from '../../assets/card1.jfif';
import Accredited from '../../assets/card2.jfif';
import Highly from '../../assets/card3.jfif';

const cardsData = [
  {
    image: contract,
    title: 'Contract Manufacturing',
    description:
      'Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.',
  },
  {
    image: Accredited,
    title: 'Accredited Contract Development',
    description:
      'Professional business coach with advanced experience on growth and business scaling.',
  },
  {
    image: Highly,
    title: 'Highly Qualified Team',
    description:
      'Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.',
  },
];

const Card = () => {
  return (
    <div className="w-full py-[8vw] ">
      <div className="w-[95%]  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-hidden ">
        {cardsData.map((card, index) => (
          <CardData
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
