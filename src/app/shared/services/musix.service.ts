import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginateReq } from '../global-interfaces';
import { END_POINTS_URLS } from '../global-variables';

@Injectable({
  providedIn: 'root'
})
export class MusixService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  artistTop(paginate: PaginateReq): Observable<any> {
    const params: HttpParams = new HttpParams({
      fromObject: { ...paginate }
    })

    return this.httpClient.get<any>(
      environment.baseUrl + END_POINTS_URLS.artist_artists_get,
      { params }
    );
  }

  searchArtist(artistName: string): Observable<any> {
    const params: HttpParams = new HttpParams({
      fromObject: {
        q_artist: artistName
      }
    })

    return this.httpClient.get<any>(
      environment.baseUrl + END_POINTS_URLS.artist_search,
      { params }
    );
  }
}
