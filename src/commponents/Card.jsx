import React from 'react';
import CardButton from './CardButton';

const Card = ({ title, subText, onCardClick }) => {
  // 로직 logic
  // const subText = "카드 서브 텍스트"
  const className = 'wonmyong';
  const cardHandleClick = () => {
    onCardClick();
  };

  // 뷰 view
  return (
    <div className="card">
      <h5 className="card-title">{title}</h5>
      <p className={className}>{subText}</p>
      <CardButton onCardButtonClick={cardHandleClick} />
      {/* onCardButtonClick 이벤트 실행 할때 cardHandleClick 함수 사용 */}
    </div>
  );
};

export default Card;
