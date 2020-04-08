# 리액트 기초 너무 어렵다

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
<App />,
document.getElementById("root")
);

리액트돔.랜더(
앱을 랜더로 그려준다, 어디에?
)도큐먼트.겟엘리먼트바이아디(루트)에다가

 <div className="App">
 디브는 원래 아무것도 없는데 클래스 네임으로 속성을 정해줘서
 = 앱이라는 값을 받는다 속성이름 = 속성값


function App() {
  const value = 28;
  return (
    <div className="App">
      <Sub age={value} />
    </div>
  );
}

 펀션 앱은 함수
 콘스트 벨류는 지역 변수
 리턴해서 리턴 내부에서 내가 그려줄 내용을 쓴다
 리턴 안에서 JSX문법을 쓴다
 서브에 내려준 age속성이름에 = 속성값으로 지역 변수 벨류를
 내려줬고, 그 벨류는 28로 설정해준 것을 받아왔다.

 프롭스는 부모가 자식에게 상속해주는 개념이고, 자식은 그것을 읽기전용으로만 사용이 가능하다

 펀션이 최상위 클래스여서 여기서 다른 곳으로 보내줄 수 있다.
 함수 안에 
