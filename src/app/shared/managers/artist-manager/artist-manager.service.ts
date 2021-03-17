import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Artist, ArtistList, DataRequest } from '../../global-interfaces';
import { MusixService } from '../../services/musix.service';

const InitialState: DataRequest<ArtistList> = {
  data: { artist_list: [] },
  loaded: false,
  loading: false
}

@Injectable({
  providedIn: 'root'
})
export class ArtistManagerService {

  private _artistList = new BehaviorSubject<DataRequest<ArtistList>>(InitialState);

  constructor(
    private readonly musixService: MusixService
  ) { }

  get artistList$() {
    return this._artistList.asObservable();
  }

  private get currentState(): DataRequest<ArtistList> {
    return this._artistList.getValue();
  }

  private setCurrentState(loading = false, loaded = false, data = this.currentState.data) {
    this._artistList.next({
      data,
      loading,
      loaded
    });
  }

  private getArtistTop(page = '1', page_size = '12', country = 'us'): Observable<ArtistList> {
    return this.musixService.artistTop({
      page,
      page_size,
      country
    })
  }

  private getArtistSearch(artistName: string, page = '1', page_size = '12'): Observable<ArtistList> {
    return this.musixService.searchArtist(
      artistName,
      { page, page_size }
    )
  }

  private get favorites(): number[] {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }

  getArtist(artistName?: string, page = '1', page_size = '12', country = 'us') {
    const favorites = this.favorites;

    const artistRequest = artistName
      ? this.getArtistSearch(artistName, page, page_size)
      : this.getArtistTop(page, page_size, country);

    this.setCurrentState(true);
    artistRequest
      .pipe(map((res: ArtistList) => {
        res.artist_list = res.artist_list.map((el: Artist) => {
          el.artist.is_favorite = favorites.some(val => val === el.artist.artist_id);
          return el;
        });
        return res;
      }))
      .subscribe((res: ArtistList) => {
        this.setCurrentState(false, true, res);
      }, () => {
        this.setCurrentState(false);
      });
  }

  addFavoriteArtist(id: number) {
    let favoritesParse = this.favorites;
    const searchIndex = this.favorites.findIndex(el => el === id);

    if (searchIndex > -1) {
      favoritesParse.splice(searchIndex, 1);
    } else {
      favoritesParse.push(id);
    }

    const currentArtist = this.currentState.data.artist_list.find((el: Artist) => el.artist.artist_id === id);

    if (currentArtist) {
      currentArtist.artist.is_favorite = !currentArtist.artist.is_favorite;
    }

    localStorage.removeItem('favorites')
    localStorage.setItem('favorites', JSON.stringify(favoritesParse))
  }
}
