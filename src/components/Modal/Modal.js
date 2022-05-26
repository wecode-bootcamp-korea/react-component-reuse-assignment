import React from "react";
import { useLocation } from "react-router-dom";
import Watcha from "../../pages/Watcha/Watcha";
import "./Modal.scss";

const Modal = () => {
  /**********************************************************
  해당 부분은 url에 따라 특정 로직을 실행시키기 위함입니다. 당장 이해가 가지 않더라고 넘어가시고,
  지금은 컴포넌트 재사용에 중점을 맞춰주세요.
  1. 현재 위치하고 있는 url 값을 가져오기 위해 useLocation 함수를 사용하였습니다.
  2. 현재 위치하고 있는 url 값을 변수 currentUrl에 할당합니다.
  3. isSelecLogin 변수에 현재 위치하고 있는 url이 "/login"이면 true, 아니라면 false 값을 할당합니다.
***********************************************************/

  const location = useLocation(); // 1
  const currentURL = location.pathname; // 2
  const isLoginURL = currentURL === "/login";

  return (
    <div className="modal">
      <Watcha data={isLoginURL ? LOGIN_DATA : SIGNUP_DATA} />
      {/* data 변수명 바뀌는게 좋을 것 같습니다! */}
      {/* 컴재 예제 자체를 Children 활용하는 방식으로 하는건 별로일까요?...*/}
    </div>
  );
};

// 여기도 DATA등 변수명 빠졌으면 좋겠습니다!
const LOGIN_DATA = {
  title: "로그인",
  text: "계정이 없으신가요? 회원가입",
  url: "/signup",
};

const SIGNUP_DATA = {
  title: "회원가입",
  text: "이미 가입하셨나요? 로그인",
  url: "/login",
};

export default Modal;
