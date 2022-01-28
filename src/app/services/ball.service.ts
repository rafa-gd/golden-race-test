import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { BallI } from '../interfaces/ball';

@Injectable({
  providedIn: 'root',
})
export class BallService {
  // Subject to report when a new ball is selected
  public selectedBalls$: Subject<BallI[]> = new Subject();

  // Selected balls array
  private selectedBalls: BallI[] = [];

  constructor() {}

  /**
   * If the ball is not selected before, it is added to the balls array
   * @param ball Ball selected by the user
   */
  public setBall(ball: BallI): void {
    this.selectedBalls.push(ball);
    this.selectedBalls$.next(this.selectedBalls);
  }

  /**
   *
   * @returns The selected balls array
   */
  public getSelectedBalls(): BallI[] {
    return this.selectedBalls;
  }

  /**
   *
   * @param ball Selected ball
   * @returns A boolean indicating whether the selected ball is already selected or not
   */
  public isSelected(ball: BallI): boolean {
    return this.selectedBalls.includes(ball);
  }

  // Reset the ball array and balls state
  public clearSelection(): void {
    this.selectedBalls.map((ball) => (ball.isSelected = false));
    this.selectedBalls = [];
    this.selectedBalls$.next(this.selectedBalls);
  }

  /**
   *
   * @returns An observable with the winning ball
   */
  public getRandomNumber(): Observable<number> {
    return of(Math.floor(Math.random() * 10));
  }
}
