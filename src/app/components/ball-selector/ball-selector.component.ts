import { Component } from '@angular/core';
import { BALLS } from 'src/app/const/balls';
import { BallI } from 'src/app/interfaces/ball';
import { BallService } from 'src/app/services/ball.service';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss'],
})
export class BallSelectorComponent {
  // Array of objects with the balls
  public balls = BALLS;

  constructor(private ballService: BallService) {}

  /**
   * If the ball is not selected before, it is added to the balls array
   * @param ball Ball selected by the user
   */
  public onSelectedBall(ball: BallI): void {
    const numSeledtedBall = this.ballService.getSelectedBalls().length;
    const isSelected = this.ballService.isSelected(ball);

    if (numSeledtedBall < 8 && !isSelected) {
      this.ballService.setBall(ball);
      ball.isSelected = true;
    }
  }

  // Call the clearSelection method of the ball service to reset the ball array and balls state
  public clearSelection(): void {
    this.ballService.clearSelection();
  }
}
