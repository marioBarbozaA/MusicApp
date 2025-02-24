export const extractAlbumId = (albumUrl: string) => {
    const parts = albumUrl.split("/");
    const lastPart = parts[parts.length - 1];
    const id = lastPart.split("?")[0];
    return id;
  };