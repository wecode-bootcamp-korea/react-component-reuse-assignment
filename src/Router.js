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
        <Route path="/kakao" element={<Kakao />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
