const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const redirectUri = "http://localhost:5173/callback";
const scopes = [
  "user-read-email",
  "playlist-modify-public",
  "app-remote-control"
];

export function getSpotifyAuthUrl(): string {
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const params = new URLSearchParams({
    client_id: clientId,
    response_type: "token",
    redirect_uri: redirectUri,
    scope: scopes.join(" ")
  });
  return `${authEndpoint}?${params.toString()}`;
}

/** Extract the Hash */
export function parseTokenFromHash(hash: string): string | null {
  if (!hash) return null;
  const params = new URLSearchParams(hash.substring(1)); // remove '#'
  return params.get("access_token");
}