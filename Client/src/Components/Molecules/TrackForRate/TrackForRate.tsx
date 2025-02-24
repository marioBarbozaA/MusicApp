import { useState } from "react";
import "./TrackForRate.scss";

interface TrackForRateProps {
  trackId: string;
  trackName: string;
  durationMs: number;
  onRatingChange: (rating: number | null) => void;
  onListenedChange: (listened: boolean) => void;
}

const TrackForRate: React.FC<TrackForRateProps> = ({
  trackId,
  trackName,
  durationMs,
  onRatingChange,
  onListenedChange,
}) => {
  const [rating, setRating] = useState<number | null>(null);
  const [listened, setListened] = useState<boolean>(false);

  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.padStart(2, "0")}`;
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRating = Number(e.target.value);
    setRating(newRating);
    onRatingChange(newRating);
  };

  const handleListenedChange = () => {
    const newListened = !listened;
    setListened(newListened);
    onListenedChange(newListened);
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
