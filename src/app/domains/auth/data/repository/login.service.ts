import { Injectable } from '@angular/core';
import { LoginRepository } from './login.repository';
import { Authentication } from '../models/authentication.model';
import { Credentials } from '../models/credentials.model';
import { RequestService } from '@services/request/request.service';
import { EndpointsService } from '@services/endpoints/endpoints.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService implements LoginRepository {
  constructor(
    private readonly request: RequestService,
    private readonly endpoints: EndpointsService
  ) {}

  public login(credentials: Credentials): Observable<Authentication> {
    return this.request.post<Authentication>(
      this.endpoints.auth.url,
      credentials
    );
  }
}
