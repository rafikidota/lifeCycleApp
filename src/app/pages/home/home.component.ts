import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent
  implements OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {

  name = 'David';
  seconds = 0;
  timerSuscription!: Subscription;
  constructor() { console.log('constructor'); }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.timerSuscription = interval(1000).subscribe(i => {
      this.seconds = i;
    });
  }

  ngDoCheck(): void { console.log('ngDoCheck'); }
  ngAfterContentInit(): void { console.log('ngAfterContentInit'); }
  ngAfterContentChecked(): void { console.log('ngAfterContentChecked'); }
  ngAfterViewInit(): void { console.log('ngAfterViewInit'); }
  ngAfterViewChecked(): void { console.log('ngAfterViewChecked'); }

  ngOnDestroy(): void { 
    console.log('ngOnDestroy'); 
    this.timerSuscription.unsubscribe();
    console.log('timer stopped');
    
  }

  save() {

  }

}
