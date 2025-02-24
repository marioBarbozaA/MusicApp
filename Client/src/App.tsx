import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LayoutGlobal from "@Pages/LayoutGlobal/LayoutGlobal";
import MainPage from "@Pages/MainPage/MainPage";
import Login from "@Pages/Login/Login";
import Callback from "@Pages/Callback/Callback";
import RateAlbumPage from "@Pages/RateAlbumPage/RateAlbumPage";

const App: React.FC = () => {
  const token = localStorage.getItem("spotify_access_token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/callback" element={<Callback />} />

        <Route
          path="/"
          element={token ? <LayoutGlobal /> : <Navigate to="/login" />}
        >
          <Route index element={<MainPage />} />
          <Route path="RateAlbum/:id" element={<RateAlbumPage />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
