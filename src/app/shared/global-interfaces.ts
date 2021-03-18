import { ListType } from "./global-enums";

export interface PaginateReq {
  page: string;
  page_size: string;
  country?: string;
}

export interface DataRequest<T> {
  data: T;
  loaded: boolean;
  loading: boolean;
}

export interface ArtistList {
  artist_list: Artist[],
  list_type?: ListType
}

export interface Artist {
  artist: ArtistData;
}

export interface ArtistData {
  artist_id: number;
  artist_name: string;
  artist_country: string;
  begin_date: string;
  artist_twitter_url: string;
  is_favorite: boolean;
}

export interface AlbumList {
  album_list: Album[];
}

export interface Album {
  album: AlbumData;
}

interface AlbumData {
  album_id: number;
  album_name: string;
}

export interface TrackList {
  track_list: Track[];
}

export interface Track {
  track: TrackData;
}

interface TrackData {
  track_name: string;
}