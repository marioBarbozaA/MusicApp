import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@Pages/Login/Login";
import Callback from "@Pages/Callback/Callback";
import MainPage from "@Pages/MainPage/MainPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
