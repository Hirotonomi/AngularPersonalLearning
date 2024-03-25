import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pargagraf',
  standalone: true,
  imports: [],
  templateUrl: './pargagraf.component.html',
  styleUrl: './pargagraf.component.css'
})
export class PargagrafComponent {
  @Input() text: string = "p"

}
