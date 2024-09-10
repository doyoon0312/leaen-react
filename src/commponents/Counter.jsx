import React, { useState } from 'react';

const Counter = () => {
  //   카운트 앱 논리 작성
  // counter라는 변수를 만든다.
  // counter의 초기값을 0으로 지정한다.
  // counter의 값을 UI에 보여준다.
  // increase 함수를 만든다.
  // 사용자가 +1 버튼을 클릭하면 increase 함수가 실행된다.
  // [increase 함수 정의] counter라는 변수의 값이 1 증가한다.
  // [increase 함수 정의] counter의 변수의 값이 10 미만인 경우에만 counter의 값을 1 증가한다.
  // 숫자가 +1 되어 변경되는 것을 확인한다.
  // -----
  // 사용자가 -1 버튼을 클릭한다.
  // 숫자가 -1이되어 변경되는 것을 확인한다.

  const [counter, setCounter] = useState(0); // (0)= 초기값

  const increase = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const decrease = () => {
    if (counter > 0) {
      // setCounter(counter - 1);
      // setCounter((abc) => abc - 1);
      setCounter((abc) => {
        return abc - 1;
      });
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{counter}</h2>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
};

export default Counter;
