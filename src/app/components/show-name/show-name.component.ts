import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-show-name',
  templateUrl: './show-name.component.html'
})
export class ShowNameComponent implements OnInit,OnChanges {

  @Input() name!:string;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void { 
    console.log('ngOnChanges');
    console.log(changes);
   }

}
