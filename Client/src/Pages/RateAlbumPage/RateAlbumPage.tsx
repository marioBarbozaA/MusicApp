import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumView from "@Components/Molecules/AlbumView/AlbumView";
import TrackForRate from "@Components/Molecules/TrackForRate/TrackForRate";
import { SpotifyAlbum } from "@/Interfaces/SpotifyAlbum";
import { SpotifyArtist } from "@/Interfaces/SpotifyArtist";
import { SpotifyTrack } from "@/Interfaces/SpotifyTrack";
import "./RateAlbumPage.scss";

const RateAlbumPage: React.FC = () => {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState<SpotifyAlbum | null>(null);
  const [artistData, setArtistData] = useState<SpotifyArtist | null>(null);
  const [detailedTracks, setDetailedTracks] = useState<SpotifyTrack[]>([]);
  const [loading, setLoading] = useState(true);
  const accessToken = localStorage.getItem("spotify_access_token");

  useEffect(() => {
    if (!id || !accessToken) return;
    setLoading(true);

    const fetchAlbum = async () => {
      try {
        const res = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        const data: SpotifyAlbum = await res.json();
        setAlbumData(data);
      } catch (error) {
        console.error("Error Get album:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbum();
  }, [id, accessToken]);

  useEffect(() => {
    if (!albumData || !albumData.tracks?.items.length || !accessToken) return;
    const trackIds = albumData.tracks.items.map((track) => track.id);

    const fetchTracks = async () => {
      try {
        const res = await fetch(
          `https://api.spotify.com/v1/tracks?ids=${trackIds.join(",")}`,
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        const data: { tracks: SpotifyTrack[] } = await res.json();
        setDetailedTracks(data.tracks);
      } catch (error) {
        console.error("Error obtaining the Tracks:", error);
      }
    };

    fetchTracks();
  }, [albumData, accessToken]);

  useEffect(() => {
    if (!albumData || !albumData.artists?.length || !accessToken) return;
    const mainArtistId = albumData.artists[0].id;

    const fetchArtist = async () => {
      try {
        const res = await fetch(
          `https://api.spotify.com/v1/artists/${mainArtistId}`,
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        const data: SpotifyArtist = await res.json();
        setArtistData(data);
      } catch (error) {
        console.error("Error Getting the Artist:", error);
      }
    };

    fetchArtist();
  }, [albumData, accessToken]);

  useEffect(() => {
    if (!albumData) return;
    const storedData = localStorage.getItem(`album_${id}`);
    if (storedData) {
      setDetailedTracks(JSON.parse(storedData).tracks);
    }
  }, [albumData, id]);

  const saveAlbumData = (updatedTracks: SpotifyTrack[]) => {
    const albumToStore = {
      id,
      tracks: updatedTracks,
    };
    localStorage.setItem(`album_${id}`, JSON.stringify(albumToStore));
  };

  if (loading) return <div>Loading...</div>;
  if (!albumData) return <div>Album Not Found.</div>;

  return (
    <div className="rate-album-page">
      <div className="rate-album-page__content">
        <div className="rate-album-page__album">
          <AlbumView
            albumName={albumData.name}
            albumCoverUrl={albumData.images?.[0]?.url || ""}
            albumSpotifyUrl={albumData.external_urls.spotify}
            artistName={artistData?.name || ""}
            artistPhotoUrl={artistData?.images?.[0]?.url || ""}
            genres={artistData?.genres || []}
          />
        </div>
        <div className="rate-album-page__tracks">
          <h3 className="rate-album-page__title">Tracks</h3>
          {detailedTracks.map((track) => (
            <TrackForRate
              key={track.id}
              trackId={track.id}
              trackName={track.name}
              artistName={track.artists.map((a) => a.name).join(", ")}
              durationMs={track.duration_ms}
              onRatingChange={(rating) => {
                const updatedTracks = detailedTracks.map((t) =>
                  t.id === track.id ? { ...t, rating } : t
                );
                setDetailedTracks(updatedTracks);
                saveAlbumData(updatedTracks);
              }}
              onListenedChange={(listened) => {
                const updatedTracks = detailedTracks.map((t) =>
                  t.id === track.id ? { ...t, listened } : t
                );
                setDetailedTracks(updatedTracks);
                saveAlbumData(updatedTracks);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RateAlbumPage;
