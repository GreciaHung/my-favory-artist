import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataRequestsInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newReq = request.clone({
      params: (request.params ? request.params : new HttpParams())
        .set('format', 'jsonp')
        .set('callback', 'callback')
        .set('apikey', 'd8c08ac0ab57c7902a409c9816e1d1da')
    });

    return next.handle(newReq);
  }
}
