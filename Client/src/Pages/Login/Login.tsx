import { getSpotifyAuthUrl } from "@API/spotifyAuth";
import { Button } from "@Components/Atoms/Button";

const Login: React.FC = () => {
  const handleLogin = () => {
    window.location.href = getSpotifyAuthUrl();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Welcome!</h1>
      <p>To view content on Spotify, you need to authorize the application.</p>
      <Button label="Login with Spotify" onClick={handleLogin} />
    </div>
  );
};

export default Login;
