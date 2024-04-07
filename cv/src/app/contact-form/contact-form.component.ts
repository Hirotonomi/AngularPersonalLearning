import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  @Input() fName: string 
  @Input() fNameText: string
  @Input() lName: string 
  @Input() lNameText: string 
  @Input() topic: string 
  @Input() topicText:string 
  @Input() submitV: string 

  sendEmail(){
    let fnameInput = <HTMLInputElement> document.getElementById("fname")
    let lnameInput = <HTMLInputElement> document.getElementById("lname")
    let textInput = <HTMLInputElement> document.getElementById("text")
    let emailStuff = {
      fname: fnameInput.value,
      sname: lnameInput.value,
      text: textInput.value
    }    
    
    console.log(emailStuff)
  }

}
