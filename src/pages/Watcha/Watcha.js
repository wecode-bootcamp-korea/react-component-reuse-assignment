import React from "react";
import { Link } from "react-router-dom";
import "./Watcha.scss";

const Watcha = ({ data }) => {
  const { title, text, url } = data;

  return (
    <div className="watchaContainer">
      <header className="logo" />
      <h2 className="title">{title}</h2>
      <form>
        {title === "회원가입" && (
          <input className="input" type="text" placeholder="이름" />
        )}
        <input className="input" type="email" placeholder="이메일" />
        <input className="input" type="password" placeholder="비밀번호" />
        <button className="button">{title}</button>
        <Link to={url} className="link">
          {text}
        </Link>
      </form>
    </div>
  );
};

export default Watcha;
