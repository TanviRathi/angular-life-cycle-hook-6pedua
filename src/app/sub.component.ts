import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'my-sub',
  template: `
    <div>
      <button (click)="inc()">cpt : {{ cpt }}</button>
    </div>
  `,
})
export class SubComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {

  cpt: number = 0;

  inc(){
    this.cpt++;
  }


  ngOnChanges() {
    console.log('ngOnChanges');
  }
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
