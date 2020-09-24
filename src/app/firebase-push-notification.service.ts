import { Injectable } from '@angular/core';
import * as admin from 'firebase-admin'

@Injectable({
  providedIn: 'root'
})
export class FirebasePushNotificationService {

  messaging = admin.messaging();

  constructor() { 
    this.send();
  }


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
