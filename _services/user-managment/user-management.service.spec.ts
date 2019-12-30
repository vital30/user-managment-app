import {CookieService} from 'ngx-cookie-service';
import { TestBed, inject } from '@angular/core/testing';

import { UserManagementService } from './user-management.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';




describe('UserManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserManagementService, CookieService],
      imports: [ HttpClientTestingModule ],
    });
  });

  it('should be created', inject([UserManagementService], (service: UserManagementService) => {
    expect(service).toBeTruthy();
  }));
});
