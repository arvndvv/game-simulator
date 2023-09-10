import { Component, Input } from '@angular/core';

@Component({
  selector: 'game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.scss']
})
export class GameComponent {
  @Input() secret = { value: '', completed: false };
  @Input() name = ''
  submit = () => {
    this.secret.completed = true;
  }
}
