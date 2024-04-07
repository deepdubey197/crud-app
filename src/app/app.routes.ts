import { Routes } from '@angular/router';
import { IndexComponent } from './post/index/index.component';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { ViewComponent } from './post/view/view.component';
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'post', redirectTo: 'post/index', pathMatch: 'full'},
  {path: 'post/index', component: IndexComponent},
  {path: 'post/create', component: CreateComponent},
  {path: 'post/:postId/edit', component: EditComponent},
  {path: 'post/:postId/view', component: ViewComponent}
];
