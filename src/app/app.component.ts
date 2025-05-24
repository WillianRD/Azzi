import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageComponent } from './page/page.component';
import { LivroPageComponent } from './livro-page/livro-page.component';
import { ModelTestComponent } from './model-test/model-test.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PageComponent, LivroPageComponent, ModelTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Azzi';
}
