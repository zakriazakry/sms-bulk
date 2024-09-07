import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { MessagesComponent } from './pages/messages/messages.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard', // Redirect the default route to 'dashboard'
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: HomeComponent, // 'HomeComponent' will render when '/dashboard' is accessed
        pathMatch: 'full',
      },
      {
        path: 'msg',
        component: MessagesComponent, // 'MessagesComponent' will render when '/msg' is accessed
        pathMatch: 'full',
      },
    ],
  },
  // Add a wildcard route for handling 404s or unmatched routes
  {
    path: '**',
    redirectTo: '', // Redirect unmatched routes to the root
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
