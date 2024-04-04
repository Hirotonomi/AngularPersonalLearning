import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ParagrafTextService } from '../paragraf-text.service';
import { PargagrafComponent } from '../pargagraf/pargagraf.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent,PargagrafComponent],
  template: `
  <app-header (toggleChecked)="updateFromToggle($event)"></app-header>

  <app-pargagraf [header]="myArray[0].header" [text]="myArray[0].text" [visbility1]="myArray[0].visbility1" [visbility2]="myArray[0].visbility2" [src]="myArray[0].src"></app-pargagraf>
  
  <app-pargagraf [header]="myArray[1].header" [text]="myArray[1].text" [visbility1]="myArray[1].visbility1" [visbility2]="myArray[1].visbility2" [src]="myArray[1].src"></app-pargagraf>

<app-pargagraf [header]="myArray[2].header" [text]="myArray[2].text" [visbility1]="myArray[2].visbility1" [visbility2]="myArray[2].visbility2"[src]="myArray[2].src"></app-pargagraf>


  `,
  styleUrl: './main.component.css',
  providers: [ParagrafTextService]
})
export class MainComponent {
  constructor(private pService: ParagrafTextService){}
  myArray = this.pService.getPolishContent()
  updateFromToggle(isChecked: boolean){
    if (isChecked){
      this.myArray = this.pService.getEnglishContent()
    }
    else{
      this.myArray = this.pService.getPolishContent()
    }

  }
  
}
