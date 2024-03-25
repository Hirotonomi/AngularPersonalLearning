import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BidingUserComponent } from './biding-user/biding-user.component';
import { PargagrafComponent } from './pargagraf/pargagraf.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,BidingUserComponent,PargagrafComponent],

  
  template: `<app-header></app-header>
  <app-biding-user [nameC]="nameA"></app-biding-user>
  <app-pargagraf [text]="textP1"></app-pargagraf>`,
  


  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
  nameA = "ugabugaaaa"
  textP1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum  "
}
