import { getSpotifyAuthUrl } from "@API/spotifyAuth";
import { Button } from "@Components/Atoms/Button";

const Login: React.FC = () => {
  const handleLogin = () => {
    window.location.href = getSpotifyAuthUrl();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>¡Bienvenido!</h1>
      <p>Para ver contenido de Spotify, necesitas autorizar la aplicación.</p>
      <Button label="Login con Spotify" onClick={handleLogin} />
    </div>
  );
};

export default Login;
