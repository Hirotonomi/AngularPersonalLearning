import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BidingUserComponent } from './biding-user/biding-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,BidingUserComponent],

  
  template: `<app-header></app-header>
  <app-biding-user [bindVar]="bindVar"></app-biding-user>`,


  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
  bindVar = "ugabuga"
}
