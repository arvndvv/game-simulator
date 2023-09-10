import { Component, Input } from '@angular/core';

@Component({
  selector: 'game-input',
  templateUrl: './game-input.component.html',
  styleUrls: ['./game-input.component.scss']
})
export class GameInputComponent {
  @Input() placeholder = "your secret";
  @Input() value = "";
  @Input() disabled = false;
}
