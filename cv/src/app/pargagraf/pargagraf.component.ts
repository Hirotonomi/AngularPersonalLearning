import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-pargagraf',
  standalone: true,
  imports: [],
  templateUrl: './pargagraf.component.html',
  styleUrl: './pargagraf.component.css'
})
export class PargagrafComponent {
  
  @Input() header: string = "title"
  @Input() text: string = "paragraf"
  @Input() src: string = "https://warhammer40000.com/wp-content/uploads/2023/07/q2AbCEAP5wfRAgzw.jpeg"
  @Input() visbility1: string =  "display:none;"
  @Input() visbility2: string =  ""
  

}
