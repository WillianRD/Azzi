import { Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { LivroPageComponent } from './livro-page/livro-page.component';
import { ModelTestComponent } from './model-test/model-test.component';

export const routes: Routes = [
    { path : 'app-root', component: PageComponent},
    { path : 'app-livro-page', component: LivroPageComponent},
    { path : 'app-model-test', component: ModelTestComponent}
];
