import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class DataRequestsInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newReq = request.clone({
      url: 'https://cors-access-allow.herokuapp.com/' + request.url,
      params: (request.params ? request.params : new HttpParams())
        .set('apikey', environment.apiKey)
    });

    return next.handle(newReq)
      .pipe(
        map(res => {
          if (res instanceof HttpResponse) {
            res = res.clone<any>({ body: res.body.message.body });
          }
          return res;
        }));
  }
}
