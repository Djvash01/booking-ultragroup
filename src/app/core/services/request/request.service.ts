import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private readonly http: HttpClient) { }

  public get<T>(url:string, options?: Object): Observable<T>{
    return this.http.get<T>(url, options);
  }

  public delete<T>(url:string, options?: Object): Observable<T>{
    return this.http.delete<T>(url, options);
  }

  public post<T>(url:string, body: unknown, options?: Object): Observable<T>{
    return this.http.post<T>(url, body, options);
  }

  public patch<T>(url:string, body: unknown, options?: Object): Observable<T>{
    return this.http.patch<T>(url, body, options);
  }
}
