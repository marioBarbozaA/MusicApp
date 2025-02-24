import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { parseTokenFromHash } from "@API/spotifyAuth";

const Callback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    const token = parseTokenFromHash(hash);
    if (token) {
      localStorage.setItem("spotify_access_token", token);
    }
    navigate("/");
  }, [navigate]);

  return <div>Processing the authentication...</div>;
};

export default Callback;
