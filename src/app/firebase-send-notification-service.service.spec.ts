import { TestBed } from '@angular/core/testing';

import { FirebaseSendNotificationServiceService } from './firebase-send-notification-service.service';

describe('FirebaseSendNotificationServiceService', () => {
  let service: FirebaseSendNotificationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseSendNotificationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
