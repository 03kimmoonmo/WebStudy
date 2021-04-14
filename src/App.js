import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>안녕하세요<br></br></code> 대구소프트웨어마이스터고등학교 <br></br>3학년 2반 8번 김문모입니다.
        </p>
        <a
          className="App-link"
          href="https://www.rocketpunch.com/@rlaansah0704"
          target="_blank"
          rel="noopener noreferrer"
        >
          로켓펀치 링크
        </a>
        <a
          className="App-link2"
          href="https://github.com/D-Book"
          target="_blank"
          rel="noopener noreferrer"
        >
          프로젝트 링크
        </a>
        <br></br>
        저는 모바일 앱 개발 분야에 취업을 희망하고 있습니다.<br></br>
        현재 진행중인 프로젝트는 날씨&코로나 앱을 만들고 있습니다.
      </header>
    </div>
  );
}

export default App;
