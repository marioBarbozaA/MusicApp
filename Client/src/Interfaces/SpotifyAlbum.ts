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
  }
  