import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumberComponent } from "./+components/number/number.component";
import { NumberPipe } from './+pipes/number.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NumberComponent,NumberPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app1';
  menu=['Ho me','Abour','product',0];
}
