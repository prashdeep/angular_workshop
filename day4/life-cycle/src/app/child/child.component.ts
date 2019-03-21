import { Component, 
         OnInit, 
         SimpleChanges, 
         Input,
         ChangeDetectionStrategy,
         ChangeDetectorRef
          } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
  
  
})
export class ChildComponent implements OnInit {

  @Input() users=[];

  constructor(changeDetector: ChangeDetectorRef){
    console.log('inside the constructor of child component');
    changeDetector.detach();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(`called inside the onchanges of child component`);
    console.log(changes);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(`came inside the on init method of child component`)
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('Inside the doCheck of child component')
  }

  



}
