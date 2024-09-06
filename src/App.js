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

  //view
  return <div>Hello, world!</div>;
}

export default App;
