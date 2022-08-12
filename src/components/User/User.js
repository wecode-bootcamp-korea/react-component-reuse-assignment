import React from "react";
import { Link } from "react-router-dom";
import "./User.scss";

const User = ({ text }) => {
  const { title, linkText, url } = text;

  return (
    <div className="user">
      <header className="logo" />
      <h2 className="title">{title}</h2>
      <form>
        {title === "회원가입" && <input type="text" placeholder="이름" />}
        <input type="email" placeholder="이메일" />
        <input type="password" placeholder="비밀번호" />
        <button>{title}</button>
        <Link to={url} className="link">
          {linkText}
        </Link>
      </form>
    </div>
  );
};

export default User;
