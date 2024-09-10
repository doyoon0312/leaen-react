import React from 'react';

const CardButton = ({ onCardButtonClick }) => {
  const cardButtonHandleClick = () => {
    onCardButtonClick();
  };

  return (
    <button className="card-button" onClick={cardButtonHandleClick}>
      Go somewhere
    </button>
  );
};

export default CardButton;
