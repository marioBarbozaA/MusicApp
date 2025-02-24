import { useState, useEffect } from "react";
import "./TrackForRate.scss";

interface TrackForRateProps {
  albumId: string;
  trackId: string;
  trackName: string;
  durationMs: number;
  onRatingChange: (rating: number | null) => void;
  onListenedChange: (listened: boolean) => void;
}

const TrackForRate: React.FC<TrackForRateProps> = ({
  albumId,
  trackId,
  trackName,
  durationMs,
  onRatingChange,
  onListenedChange,
}) => {
  const [rating, setRating] = useState<number | null>(null);
  const [listened, setListened] = useState<boolean>(false);

  useEffect(() => {
    const storedAlbums = localStorage.getItem("albums");
    if (storedAlbums) {
      const albumsData = JSON.parse(storedAlbums);
      if (albumsData[albumId]) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const trackData = albumsData[albumId].tracks.find((t: any) => t.id === trackId);
        if (trackData) {
          setRating(trackData.rating);
          setListened(trackData.listened);
        }
      }
    }
  }, [albumId, trackId]);

  const saveTrackData = (updatedRating: number | null, updatedListened: boolean) => {
    const storedAlbums = localStorage.getItem("albums");
    const albumsData = storedAlbums ? JSON.parse(storedAlbums) : {};

    if (!albumsData[albumId]) {
      albumsData[albumId] = { id: albumId, tracks: [] };
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const trackIndex = albumsData[albumId].tracks.findIndex((t: any) => t.id === trackId);
    if (trackIndex !== -1) {
      albumsData[albumId].tracks[trackIndex] = { id: trackId, rating: updatedRating, listened: updatedListened };
    } else {
      albumsData[albumId].tracks.push({ id: trackId, rating: updatedRating, listened: updatedListened });
    }

    localStorage.setItem("albums", JSON.stringify(albumsData));
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRating = Number(e.target.value);
    setRating(newRating);
    onRatingChange(newRating);
    saveTrackData(newRating, listened);
  };

  const handleListenedChange = () => {
    const newListened = !listened;
    setListened(newListened);
    onListenedChange(newListened);
    saveTrackData(rating, newListened);
  };

  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.padStart(2, "0")}`;
  };

  return (
    <div className="track-for-rate" key={trackId}>
      <div className="track-for-rate__info">
        <span className="track-for-rate__name">{trackName}</span>
        <span className="track-for-rate__duration">{formatDuration(durationMs)}</span>
      </div>

      <div className="track-for-rate__actions">
        <select
          className="track-for-rate__rating"
          value={rating ?? ""}
          onChange={handleRatingChange}
        >
          <option value="">Rate</option>
          {[...Array(10)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>

        <label className="track-for-rate__listened">
          <input
            type="checkbox"
            checked={listened}
            onChange={handleListenedChange}
          />
          Listened
        </label>
      </div>
    </div>
  );
};

export default TrackForRate;
