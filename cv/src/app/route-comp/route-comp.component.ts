import { Component } from '@angular/core';

@Component({
  selector: 'app-route-comp',
  templateUrl: './route-comp.component.html',
  styleUrls: ['./route-comp.component.css']
})  
export class RouteCompComponent {
  twoWayBind: string = "Initial Value";
}