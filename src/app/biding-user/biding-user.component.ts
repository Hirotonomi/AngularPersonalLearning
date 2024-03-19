import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-biding-user',
  standalone: true,
  imports: [],
  template: `
    <input type="text">
    <p>{{bindVar}}</p>
  `,
  styleUrl: './biding-user.component.css'
})
export class BidingUserComponent {
  @Input() bindVar: string = "p"


}
