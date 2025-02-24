import { extractAlbumId } from "@Utils/extractAlbumId";
import "./SongCard.scss";
import * as FaIcons from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const handleClick = () => {
    const albumId = extractAlbumId(albumUrl);
    navigate(`/RateAlbum/${albumId}`);
  };

  return (
    <div className="song-card" onClick={handleClick}>
      <div className="song-card__image-container">
        <img
          src={imageUrl}
          alt={title}
          className="song-card__image"
        />
        <div className="song-card__overlay">
          <FaIcons.FaMusic />
        </div>
      </div>
      <h4 className="song-card__title">{title}</h4>
      <p className="song-card__subtitle">{subtitle}</p>
    </div>
  );
};

export default SongCard;
