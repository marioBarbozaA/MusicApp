export interface SpotifyAlbumTrackItem {
  artists: Array<{
    id: string;
    name: string;
  }>;
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  preview_url: string | null;
  track_number: number;
  type: string; // "track"
  uri: string;
  // Podrías agregar más si los necesitas
}

export interface SpotifyAlbumTracks {
  href: string;
  items: SpotifyAlbumTrackItem[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface SpotifyAlbum {
  id: string;
  name: string;
  images: Array<{
    url: string;
    width: number;
    height: number;
  }>;
  artists: Array<{
    id: string;
    name: string;
  }>;
  external_urls: {
    spotify: string;
  };
  album_type: string;
  available_markets: string[];
  href: string;
  uri: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  tracks: SpotifyAlbumTracks;
}
