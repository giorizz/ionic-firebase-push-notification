import { Injectable } from '@angular/core';
import * as admin from 'firebase-admin'

@Injectable({
  providedIn: 'root'
})
export class FirebasePushNotificationService {

  messaging = admin.messaging();

  constructor() { }
}
