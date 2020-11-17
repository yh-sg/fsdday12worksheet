import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friedfish',
  templateUrl: './friedfish.component.html',
  styleUrls: ['./friedfish.component.css']
})
export class FriedFishComponent implements OnInit {

    firstName = "yh"
    canSubmit:boolean = true;
    color="blue";
    isOdd=[1,2,3,4,5];
    isMouseEnter: boolean = false;
    mouseCoordX: number= 0;
    mouseCoordY: number= 0;

    constructor() { }

    ngOnInit(): void {
    }

    mouseOverFn(event){
        this.mouseCoordX = event.offsetX;
        this.mouseCoordY = event.offsetY;
        this.isMouseEnter = true;
      }

}