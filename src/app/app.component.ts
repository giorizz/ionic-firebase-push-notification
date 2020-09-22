import { environment } from './../environments/environment';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as admin from "firebase-admin";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
admin = require('firebase-admin');

firebaseConfig: {
    apiKey: "AIzaSyCTCtUiKgGooa7uboxTcQAmDxfq5qW5uDM",
    authDomain: "ionicnotification-1ff55.firebaseapp.com",
    databaseURL: "https://ionicnotification-1ff55.firebaseio.com",
    projectId: "ionicnotification-1ff55",
    storageBucket: "ionicnotification-1ff55.appspot.com",
    messagingSenderId: "1034526141540",
    appId: "1:1034526141540:web:8120341346815cf53d4371",
    measurementId: "G-9DF6N8BD08"
  }

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
    this.admin.initializeApp(this.firebaseConfig);

  }

  private initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}