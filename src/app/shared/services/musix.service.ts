import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArtistList, PaginateReq } from '../global-interfaces';
import { END_POINTS_URLS } from '../global-variables';

@Injectable({
  providedIn: 'root'
})
export class MusixService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  artistTop(paginate: PaginateReq): Observable<ArtistList> {
    const params: HttpParams = new HttpParams({
      fromObject: { ...paginate }
    })

    return this.httpClient.get<ArtistList>(
      environment.baseUrl + END_POINTS_URLS.artist_artists_get,
      { params }
    );
  }

  searchArtist(artistName: string, paginate: PaginateReq): Observable<ArtistList> {
    const params: HttpParams = new HttpParams({
      fromObject: {
        ...paginate,
        q_artist: artistName
      }
    })

    return this.httpClient.get<ArtistList>(
      environment.baseUrl + END_POINTS_URLS.artist_search,
      { params }
    );
  }

  getArtistDetails(artistId: number): Observable<any> {
    const params: HttpParams = new HttpParams({
      fromObject: {
        artist_id: String(artistId)
      }
    })

    return this.httpClient.get<any>(
      environment.baseUrl + END_POINTS_URLS.artist_get,
      { params }
    );
  }

  getArtistAlbums(artistId: number): Observable<any> {
    const params: HttpParams = new HttpParams({
      fromObject: {
        artist_id: String(artistId)
      }
    })

    return this.httpClient.get<any>(
      environment.baseUrl + END_POINTS_URLS.album_get,
      { params }
    );
  }
}
