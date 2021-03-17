import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ArtistList, DataRequest } from '../../global-interfaces';
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

  getArtist(artistName?: string, page = '1', page_size = '12', country = 'us') {
    const artistRequest = artistName
      ? this.getArtistSearch(artistName, page, page_size)
      : this.getArtistTop(page, page_size, country);

    this.setCurrentState(true);
    artistRequest.subscribe((res: ArtistList) => {
      this.setCurrentState(false, true, res);
    }, () => {
      this.setCurrentState(false);
    });
  }

  private getArtistTop(page = '1', page_size = '12', country = 'us') {
    return this.musixService.artistTop({
      page,
      page_size,
      country
    })
  }

  private getArtistSearch(artistName: string, page = '1', page_size = '12') {
    return this.musixService.searchArtist(
      artistName,
      { page, page_size }
    )
  }

}
