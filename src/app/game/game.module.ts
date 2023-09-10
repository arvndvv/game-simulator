import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game-component/game-component.component';
import { GameInputComponent } from './game-input/game-input.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GameComponent,
    GameInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }
