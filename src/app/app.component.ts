import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { Observable, of } from 'rxjs';
import { mergeMapTo } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  token: string | null = null;

  constructor(private afMessaging: AngularFireMessaging) { }

  requestPushNotificationsPermission() { // requesting permission
    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (t) => { this.token = t },
        (error) => { console.error(error); },
      );
  }
}
