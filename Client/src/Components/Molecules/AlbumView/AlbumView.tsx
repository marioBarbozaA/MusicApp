import ArtistDisplay from "@Components/Atoms/ArtistDisplay/ArtistDisplay";
import "./AlbumView.scss";
import * as FaIcons from "react-icons/fa";


interface AlbumViewProps {
  albumName: string;
  albumCoverUrl: string;
  albumSpotifyUrl: string;
  artistName: string;
  artistPhotoUrl: string;
  genres: string[];
}

const AlbumView: React.FC<AlbumViewProps> = ({
  albumName,
  albumCoverUrl,
  albumSpotifyUrl,
  artistName,
  artistPhotoUrl,
  genres,
}) => {
  const handleListenClick = () => {
    window.open(albumSpotifyUrl, "_blank");
  };

  return (
    <div className="album-view">
      <h2 className="album-view__title">{albumName}</h2>
      
      <img
        className="album-view__cover"
        src={albumCoverUrl}
        alt={`Cover of ${albumName}`}
      />
      
      <div className="album-view__artist">
        <ArtistDisplay artistName={artistName} artistPhotoUrl={artistPhotoUrl} />
      </div>
      
      <div className="album-view__genres">
        {genres.map((genre) => (
          <span key={genre} className="album-view__genre-chip">
            {genre}
          </span>
        ))}
      </div>

      <button className="album-view__listen-btn" onClick={handleListenClick}>
        Listen <FaIcons.FaSpotify />
      </button>
    </div>
  );
};

export default AlbumView;
