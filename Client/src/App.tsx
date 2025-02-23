import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutGlobal from "@Pages/LayoutGlobal/LayoutGlobal";
import MainPage from "@Pages/MainPage/MainPage";
import Login from "@Pages/Login/Login";
import Callback from "@Pages/Callback/Callback";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/callback" element={<Callback />} />

        <Route path="/" element={<LayoutGlobal />}>
          <Route index element={<MainPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
