import { Observable } from 'rxjs';
import { Authentication } from '../models/authentication.model';
import { Credentials } from '../models/credentials.model';

export abstract class LoginRepository {
  public abstract login(credentials: Credentials): Observable<Authentication>;
}