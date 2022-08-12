import React from "react";
import { useLocation } from "react-router-dom";
import User from "../../components/User/User";
import "./Watcha.scss";

const Watcha = () => {
  /**********************************************************

  해당 부분은 url에 따라 특정 로직을 실행시키기 위함입니다. 당장 이해가 가지 않더라고 넘어가시고,
  지금은 컴포넌트 재사용에 중점을 맞춰주세요.
  1. 현재 위치하고 있는 url 값을 가져오기 위해 useLocation 함수를 사용하였습니다.
  2. 현재 위치하고 있는 url 값을 변수 currentUrl에 할당합니다.
  3. isSelecLogin 변수에 현재 위치하고 있는 url이 "/login"이면 true, 아니라면 false 값을 할당합니다.

  참고로 상수 데이터의 이름과 User 컴포넌트에 있는 props 이름이 학습자료와 상이한데
  학습자료에 있는 내용은 여러분의 이해를 돕기 위해서 간단하게 작성한 이름이니
  실제 코드에 적용할 때는 과제에 있는 이름과 같이 변수명을 지어주시면 되겠습니다.
  로직은 학습자료 및 영상자료와 동일합니다! 참고해주세요!
  
***********************************************************/

  const location = useLocation(); // 1
  const currentURL = location.pathname; // 2
  const isSelecLogin = currentURL === "/login" && true; // 3

  return (
    <div className="watcha">
      <User text={isSelecLogin ? LOGIN_TEXT : SIGNUP_TEXT} />
    </div>
  );
};

const LOGIN_TEXT = {
  title: "로그인",
  linkText: "계정이 없으신가요? 회원가입",
  url: "/signup",
};

const SIGNUP_TEXT = {
  title: "회원가입",
  linkText: "이미 가입하셨나요? 로그인",
  url: "/login",
};

export default Watcha;
