import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Watcha from "./pages/Watcha/Watcha";
import Kakao from "./pages/Kakao/Kakao";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Watcha />} />
        <Route path="/signup" element={<Watcha />} />
        <Route path="/kakao" element={<Kakao />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
