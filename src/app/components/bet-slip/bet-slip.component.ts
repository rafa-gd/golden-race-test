import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BallI } from 'src/app/interfaces/ball';
import { BallService } from 'src/app/services/ball.service';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss'],
})
export class BetSlipComponent implements OnInit, OnDestroy {
  // Form with the bet Control. The bet control has a validation because it is a mandatory field and it must be greater than 5
  public betForm = new FormGroup({
    bet: new FormControl(0, [Validators.required, Validators.min(5)]),
  });

  // Array of selected balls
  public selectedBalls: BallI[] = [];

  //Random number that indicates the winner ball
  public result: number = 0;

  constructor(private ballService: BallService) {}

  ngOnInit(): void {
    /**
     * When a new ball is selected, we receive the new array
     */
    this.ballService.selectedBalls$.subscribe((selectedBalls) => {
      this.selectedBalls = selectedBalls;
    });
  }

  // Remove the subscriptions
  ngOnDestroy() {
    this.ballService.selectedBalls$.unsubscribe();
  }

  // When the user has placed the bet, a random number is created
  public placeBet(): void {
    this.ballService.getRandomNumber().subscribe((number) => {
      this.result = number;
    });
  }

  // Call the clearSelection method of the ball service to reset the ball array, balls state and reset the result variable
  public reset(): void {
    this.ballService.clearSelection();
    this.result = 0;
  }

  /**
   *
   * @param item Current ball to be drawn
   * @returns Id of the current ball
   */
  public trackByBall(item: any): number {
    return item.id;
  }
}
