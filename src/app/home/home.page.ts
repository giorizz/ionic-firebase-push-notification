import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { INotificationPayload } from 'cordova-plugin-fcm-with-dependecy-updated';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public hasPermission: boolean;
  public token: string;
  public pushPayload: INotificationPayload;

  constructor(private platform: Platform, private fcm: FCM) {
    this.setupFCM();
  }
  private async setupFCM() {
    await this.platform.ready();
    console.log('FCM setup started');

    if (!this.platform.is('cordova')) {
      return;
    }
    console.log('In cordova platform');

    console.log('Subscribing to token updates');
    this.fcm.onTokenRefresh().subscribe((newToken) => {
      this.token = newToken;
      console.log('onTokenRefresh received event with: ', newToken);
    });

    console.log('Subscribing to new notifications');
    this.fcm.onNotification().subscribe((payload) => {
      this.pushPayload = payload;
      console.log('onNotification received event with: ', payload);
    });

    this.hasPermission = await this.fcm.requestPushPermission();
    console.log('requestPushPermission result: ', this.hasPermission);

    this.token = await this.fcm.getToken();
    console.log('getToken result: ', this.token);
    //token do aparelho de teste
    // dmCt_jQQe4I:APA91bHwg9Seg9yitx8Y8WDLHfvX0T6mcLmMLEyyCnmfqRAqNan5VkTvUvhbLOo9tKav4QeH2Dhsh4K_ce9f8igO2GxMpVb3qtb0wr-FHqAM2dXmb_Uh9vxL4nE7oIG5O4H22uKPLDw-


    this.pushPayload = await this.fcm.getInitialPushPayload();
    console.log('getInitialPushPayload result: ', this.pushPayload);
  }

  public get pushPayloadString() {
    return JSON.stringify(this.pushPayload, null, 4);
  }
}