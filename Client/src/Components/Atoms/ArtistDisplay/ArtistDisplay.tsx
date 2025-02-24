import "./ArtistDisplay.scss";

interface ArtistDisplayProps {
  artistName: string;
  artistPhotoUrl: string;
}

const ArtistDisplay: React.FC<ArtistDisplayProps> = ({
  artistName,
  artistPhotoUrl,
}) => {
  return (
    <div className="artist-display">
      <img
        className="artist-display__photo"
        src={artistPhotoUrl}
        alt={artistName}
      />
      <span className="artist-display__name">{artistName}</span>
    </div>
  );
};

export default ArtistDisplay;
