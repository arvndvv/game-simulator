import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, concatMap, delay, finalize, from, map, of, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  valuesForInput = [
    {
      id: 0,
      name: 'naruto',
      secret: '123'
    },
    {
      id: 1,
      name: 'kakashi',
      secret: '678'
    }
  ]
  secrets$ = new BehaviorSubject([{
    value: '',
    completed: false
  }, {
    value: '',
    completed: false
  }])


  setSecret(index = 0, startDelay = 3000) {
    setTimeout(() => {
      const finished = new Subject();
      finished.next(false);
      const secretValue = this.valuesForInput[index].secret;
      from(secretValue).pipe(takeUntil(finished),
        //copied he below code of concatmap from stackoverflow to delay each digit input
        concatMap(item => of(item).pipe(
          delay(1000)
        )),
        switchMap((digit, digitIndex) => this.secrets$.pipe(map((secrets: any) => {
          console.log('secrets', secrets)
          const secret = secrets[index];
          secret.value = secret.value + digit;
          if (digitIndex === secretValue.length - 1) {
            secret.completed = true;
          }
          return secrets;
        }))),
        finalize(() => {
          finished.next(true);
        })).subscribe()
    }, startDelay);
  }
  constructor() {

  }
  ngOnInit(): void {
    this.setSecret(0, 3000);
    this.setSecret(1, 2000);
  }
}
