import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetSlipComponent } from './bet-slip.component';

describe('BetSlipComponent', () => {
  let component: BetSlipComponent;
  let fixture: ComponentFixture<BetSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BetSlipComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as selected balls...`, () => {
    const fixture = TestBed.createComponent(BetSlipComponent);
    const app = fixture.componentInstance;
    expect(app.selectedBalls).toEqual([]);
  });

  it(`should have as result`, () => {
    const fixture = TestBed.createComponent(BetSlipComponent);
    const app = fixture.componentInstance;
    expect(app.result).toEqual(0);
  });

  it('should have 0 or more selected balls', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(compiled.querySelectorAll('.ball').length).toBeGreaterThanOrEqual(0);
  });
});
