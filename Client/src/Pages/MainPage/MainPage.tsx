import { useEffect, useState } from "react";
import "./MainPage.scss";
import { SpotifyAlbum } from "@Interfaces/SpotifyAlbum";
import { CarouselWithPagination } from "@Components/Organism/CarouselWithPagination";

const LIMIT = 10;

const MainPage: React.FC = () => {
  const [albums, setAlbums] = useState<SpotifyAlbum[]>([]);

  const [limit] = useState(LIMIT);
  const [offset, setOffset] = useState(0); 
  const [total, setTotal] = useState(0);

  const accessToken = localStorage.getItem("spotify_access_token");

  const fetchNewReleases = async (limit: number, offset: number) => {
    if (!accessToken) return;
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/browse/new-releases?limit=${limit}&offset=${offset}`,
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
      
      setAlbums(data.albums.items || []);
      setTotal(data.albums.total || 0);
    } catch (error) {
      console.error("Error en fetchNewReleases:", error);
    }
  };

  useEffect(() => {
    fetchNewReleases(limit, offset);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  const handleNextPage = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  const handlePrevPage = () => {
    setOffset((prevOffset) => Math.max(prevOffset - limit, 0));
  };

  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);

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
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={handleNextPage}
          onPrev={handlePrevPage}
        />
      </div>
    </div>
  );
};

export default MainPage;