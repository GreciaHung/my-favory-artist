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

  getArtistTop(page = '1', page_size = '6', country = 'us') {
    this.setCurrentState(true);

    this.musixService.artistTop({
      page,
      page_size,
      country
    }).subscribe((res: ArtistList) => {
      this.setCurrentState(false, true, res);
    }, () => {
      this.setCurrentState(false);
    });
  }
}
