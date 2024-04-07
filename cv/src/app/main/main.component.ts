import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import SService from '../service.service';
import { PargagrafComponent } from '../pargagraf/pargagraf.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent,PargagrafComponent,ContactFormComponent],
  template: `
  <app-header (toggleChecked)="updateFromToggle($event)"></app-header>

  <app-pargagraf [header]="myArray[0].header" [text]="myArray[0].text" [visbility1]="myArray[0].visbility1" [visbility2]="myArray[0].visbility2" [src]="myArray[0].src"></app-pargagraf>
  <app-pargagraf [header]="myArray[1].header" [text]="myArray[1].text" [visbility1]="myArray[1].visbility1" [visbility2]="myArray[1].visbility2" [src]="myArray[1].src"></app-pargagraf>
  <app-pargagraf [header]="myArray[2].header" [text]="myArray[2].text" [visbility1]="myArray[2].visbility1" [visbility2]="myArray[2].visbility2"[src]="myArray[2].src"></app-pargagraf>

  <span style="margin-bottom: 2vh;">&nbsp;</span>

  <app-contact-form 
  [fName]="formContent.fname" 
  [fNameText]="formContent.fNameText"
  [lName]="formContent.lName"
  [lNameText]="formContent.lNameText"
  [topic]="formContent.topic"
  [topicText]="formContent.topicText"
  [submitV]="formContent.submitV"
></app-contact-form>
    
  `,
  styleUrl: './main.component.css',
  providers: [SService]
})
export class MainComponent {

  constructor(private pService: SService){}

  myArray = this.pService.getPolishParagraphContent()
  formContent = this.pService.getPolishFormContent()

  updateFromToggle(isChecked: boolean){
    if (isChecked){
      this.myArray = this.pService.getEnglishParagraphContent()
      this.formContent = this.pService.getEnglishFormContent()
    }
    else{
      this.myArray = this.pService.getPolishParagraphContent()
      this.formContent = this.pService.getPolishFormContent()
    }
  }

  
  
}
