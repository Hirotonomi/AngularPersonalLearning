import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
  <div class="head">
    <img src="https://i.pinimg.com/474x/b4/26/ae/b426ae05e7a511c7dbfa4ee8260f7b29--fantasy-rpg-warhammer-fantasy.jpg">
    <h1>Jan Rękas</h1>
  
  </div>
`
    ,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
