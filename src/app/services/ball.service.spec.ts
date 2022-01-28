import { TestBed } from '@angular/core/testing';
import { BallService } from './ball.service';

describe('BallService', () => {
  let service: BallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getRandomNumber should return value from observable', (done: DoneFn) => {
    service.getRandomNumber().subscribe((value) => {
      expect(value).toBeGreaterThan(0);
      done();
    });
  });
});
