import "./SongCard.scss";

interface SongCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  albumUrl: string;
}

const SongCard: React.FC<SongCardProps> = ({
  imageUrl,
  title,
  subtitle,
  albumUrl,
}) => {
  const handleClick = () => {
    window.open(albumUrl);
  };
  return (
    <div className="song-card" onClick={handleClick}>
      <div className="song-card__image-container">
        <img
          src={imageUrl}
          alt={title}
          className="song-card__image"
        />
        <div className="song-card__overlay">See more</div>
      </div>
      <h4 className="song-card__title">{title}</h4>
      <p className="song-card__subtitle">{subtitle}</p>
    </div>
  );
};

export default SongCard;
