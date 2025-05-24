import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageComponent } from './page/page.component';
import { LivroPageComponent } from './livro-page/livro-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Azzi';
}
