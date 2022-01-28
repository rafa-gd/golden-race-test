import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BALLS } from 'src/app/const/balls';
import { BallI } from 'src/app/interfaces/ball';
import { BallService } from 'src/app/services/ball.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  //Random number that indicates the winner ball
  @Input() result: number = 0;

  //This output informs that the user wants to restart the application
  @Output() reset = new EventEmitter<void>();

  // Array of objects with the balls
  public balls = BALLS;

  // Object indicating whether the random number is the winning number
  public isWinner: BallI | undefined = { number: 0, color: '#000000', isSelected: false };

  // Message to show when the game is finished. It can be You won or You lost
  public message: string = '';

  constructor(private ballService: BallService) {}

  ngOnInit(): void {
    // Finds the result ball number in the array of the selected balls. If the array includes this ball, the user has won.
    this.isWinner = this.ballService.getSelectedBalls().find((ball) => ball.number === this.result);
    this.message = this.isWinner ? 'You Won' : 'You Lost';
  }

  // Informs the parent component that the user wants to restart the game
  public restart(): void {
    this.reset.emit();
  }
}
