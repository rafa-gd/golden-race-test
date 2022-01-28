import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ResultsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Results');
  });

  it(`should have as result`, () => {
    const fixture = TestBed.createComponent(ResultsComponent);
    const app = fixture.componentInstance;
    expect(app.result).toEqual(0);
  });

  it(`should have as balls array...`, () => {
    const fixture = TestBed.createComponent(ResultsComponent);
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

  it(`should have as winning ball...`, () => {
    const fixture = TestBed.createComponent(ResultsComponent);
    const app = fixture.componentInstance;
    expect(app.isWinner).toEqual({ number: 0, color: '#000000', isSelected: false });
  });

  it(`should have as message...`, () => {
    const fixture = TestBed.createComponent(ResultsComponent);
    const app = fixture.componentInstance;
    expect(app.message).toEqual('');
  });
});
