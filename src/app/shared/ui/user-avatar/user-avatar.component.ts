import { ChangeDetectionStrategy, Component, Signal, WritableSignal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from '@domains/auth/data/models/authentication.model';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAvatarComponent {

  public userInfo: WritableSignal<Authentication>;

  constructor(private readonly router: Router){
    const data = JSON.parse(sessionStorage.getItem('user_token') ?? '{}');
    this.userInfo = signal<Authentication>(data)
  }

  public logout():void {
    sessionStorage.clear();
    this.router.navigateByUrl('/home');
  }

}
