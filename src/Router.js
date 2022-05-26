import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "./components/Modal/Modal";
import Kakao from "./pages/Kakao/Kakao";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Modal />} />
        <Route path="/signup" element={<Modal />} />
        {/* 컴포넌트에 있는 Modal이 Router에 있는 것 보다,
          Watcha 페이지 컴포넌트가 여기 라우터에 연결되고
        모달 컴포넌트를 왓차 컴포넌트에서 가져다 쓰는게 좋을 것 같습니다. */}
        <Route path="/kakao" element={<Kakao />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
