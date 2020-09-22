import { Injectable } from '@angular/core';
import * as admin from "firebase-admin";

@Injectable({
  providedIn: 'root'
})
export class FirebaseSendNotificationService {

  messaging = admin.messaging();

  constructor() {
    // this.start();
  }

  /*
  async start() {
    this.send().then(() => {
      console.log('ok');
    }).catch(() => {
      console.log('not ok');
    });
  }
  */


  async send() {
    try {
      const response = await this.messaging.send({
        notification: {
          title: 'FUNCEIA CARALEO',
          body: 'FUNCIONOU POR SCRIPT SIM'
        },
        token: '098y'
      });
      console.log('SEND >> ', response);
    } catch (error) {
      console.log('SEND ERRO >>> ', error);
      throw error;
    }
  }

}