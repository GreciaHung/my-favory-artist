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
