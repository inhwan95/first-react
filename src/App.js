import logo from './logo.svg';
import './App.css';
import Box from './component/Box';

// 1. 박스 2개 (title, 사진정보, 결과값)
// 2. 가위바위보 버튼  
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임.
// 4. 컴퓨터는 랜덤하게 선택이 된다.
// 5. 3,4의 결과를 가지고 누가 이겼는지 승패 따짐.
// 6. 이기면 초록 지면 빨강 비기면 검정으로 테두리 색 변경

const choice = {
  rock: {
    name: "Rock",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMjNfMTcz%2FMDAxNjM3NjUyMTI2NDk4.IRK2BNOc9ORPZIFM0cqC82idNK9-Vsa9jwWNwKzx7Dkg.9Ez3GYx4KHmawz1MTTWnDbDiw2zrbyElrTGmWaV3nZ4g.JPEG.arkgymhs%2F%25B2%25BF%25B8%25B6%25B5%25B9.jpg&type=a340"
  },
  scissors: {
    name: "Scissors",
    img: "https://pnshop.co.kr/file/product/thumbnail/1548741810754_PN%20%EC%A3%BC%EB%B0%A9%EA%B0%80%EC%9C%84_005.jpg"
  },
  paper: {
    name: "Paper",
    img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F0b%2F43%2F19%2F0b4319c33f0797395db739f061fe8178.jpg&type=a340"
  }
}
function App() {

  const play = (userChoice) => {
    console.log("선택됨!", userChoice);

  }
  return (
    <div>
      <div className='main gap'>
        <Box title="you" />
        <Box title="computer" />
      </div>
      <div className='main'>
        <button onClick={() => play("Scissors")}>가위</button>
        <button onClick={() => play("Rock")}>바위</button>
        <button onClick={() => play("Paper")}>보</button>
      </div>
    </div>
  );
}

export default App;