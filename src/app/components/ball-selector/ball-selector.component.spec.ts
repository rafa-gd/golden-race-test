import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallSelectorComponent } from './ball-selector.component';

describe('BallSelectorComponent', () => {
  let component: BallSelectorComponent;
  let fixture: ComponentFixture<BallSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BallSelectorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as balls array...`, () => {
    const fixture = TestBed.createComponent(BallSelectorComponent);
    const app = fixture.componentInstance;
    expect(app.balls).toEqual([
      { number: 1, color: '#d55352', isSelected: false },
      { number: 2, color: '#eed138', isSelected: false },
      { number: 3, color: '#4ca767', isSelected: false },
      { number: 4, color: '#d55352', isSelected: false },
      { number: 5, color: '#eed138', isSelected: false },
      { number: 6, color: '#4ca767', isSelected: false },
      { number: 7, color: '#d55352', isSelected: false },
      { number: 8, color: '#eed138', isSelected: false },
      { number: 9, color: '#4ca767', isSelected: false },
      { number: 10, color: '#d55352', isSelected: false },
    ]);
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BallSelectorComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Numbers');
  });
});
