import { Component } from '@angular/core';
import { AppModule } from '../app.module';
import { EmotePipe } from '../emote.pipe';



@Component({
  selector: 'app-route',
  standalone: true,
  imports: [EmotePipe,AppModule],
  templateUrl: './route.component.html',
  styleUrl: './route.component.css'
})
export class RouteComponent {
  twoWayBind: string = "twoWayBind"
  pipeText: string = "pipetextpipetext"
}
