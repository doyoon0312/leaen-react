import Card from './commponents/Card';
import Login from './pages/Login';
import Counter from './commponents/Counter';
import { useState } from 'react';

function App() {
  // logic
  console.log('app.js');

  // 밴틱
  const name = '김원명';
  const age = 35;

  const greetingMessage = `안녕하세요. ${name}님! 나이가 ${age}살 이시네요.
환영합니다.`;

  // Logical operators

  const user = {
    isLoggedIn: true,
    role: 'admin', // 'guest', 'user'
  };

  // 사용자가 로그인 한 상태이면서, 역할이 'admin' 일때 관리자 페이지 접근 가능, 관리자 페이지 접근 불가능

  if (user.isLoggedIn || user.role === 'admin') {
    console.log('관리자 페이지 접근 가능');
  } else {
    console.log('관리자 페이지 접근 불가능');
  }

  // Default parmeter 매개변수

  // 함수 정의
  const greeting = (input = '고객') => {
    return `${input}님, 반갑습니다!`;
  };

  // 함수 호출
  console.log(greeting());

  // 구조 분해 할당
  const studentList = ['김원명', '김도윤'];
  const [first = '조도우', second, third = '김현호'] = studentList;

  // 객체 구조 분해 할당
  const person = {
    name1: '김원명',
    age1: 35,
    email1: 'kimwonmyong@gmail.com',
  };

  // const name = person.name
  // const age = person.age
  // const email = person.email

  // const { name1, age1, email1 } = person;
  console.log('🚀person:', person);

  // name만 바꾸기
  const personNew = { ...person, name1: '김도삼' };
  console.log('🚀personNew:', personNew);

  // 전개 구문 Spread Syntax
  const studentList1 = ['김원명', '김도윤'];

  const addStudent1 = () => {
    const addStudent1 = [...studentList1, '김사랑'];
    console.log('🚀addStudent1:', addStudent1);
  };

  addStudent1();

  const [title, setTitle] = useState('초기');

  const appHandleClick = () => {
    window.location.href = 'https://www.naver.com/';
  };

  //view
  return (
    <>
      {/* <div>Hello, world!</div> */}
      <div>
        {/* <Card
          title={title}
          subText={'후츠릿 짱'}
          onCardClick={appHandleClick}
        /> */}
        {/* <Counter /> */}
      </div>
      <div>
        <Login />
      </div>
    </>
  );
}

export default App;
