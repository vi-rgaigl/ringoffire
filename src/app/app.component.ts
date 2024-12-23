import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ringoffire';
}
