import { useEffect, useState } from "react";
import "./MainPage.scss";
import { SpotifyAlbum } from "@Interfaces/SpotifyAlbum";
import { CarouselWithPagination } from "@Components/Organism/CarouselWithPagination";

const LIMIT = 6;

const MainPage: React.FC = () => {
  const [albums, setAlbums] = useState<SpotifyAlbum[]>([]);
  const accessToken = localStorage.getItem("spotify_access_token");

  const fetchNewReleases = async () => {
    if (!accessToken) return;
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/browse/new-releases?limit=50`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (!response.ok) {
        console.error("Error al obtener nuevos lanzamientos");
        return;
      }
      const data = await response.json();
      setAlbums(data.albums.items);
    } catch (error) {
      console.error("Error en fetchNewReleases:", error);
    }
  };

  useEffect(() => {
    fetchNewReleases();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const carouselItems = albums.map((album) => ({
    id: album.id,
    imageUrl: album.images[0]?.url || "",
    title: album.name,
    subtitle: album.artists.map((a) => a.name).join(", "),
    albumUrl: album.external_urls.spotify,
  }));

  return (
    <div className="main-page">
      <div className="main-page__carousel">
        <CarouselWithPagination
          title="New Albums"
          subtitle="Explore new music"
          items={carouselItems}
          limit={LIMIT}
        />
      </div>
    </div>
  );
};

export default MainPage;
