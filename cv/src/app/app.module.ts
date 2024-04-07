import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouteCompComponent } from './route-comp/route-comp.component';



@NgModule({
  declarations: [
    RouteCompComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RouteCompComponent 
  ]
})
export class AppModule { }
