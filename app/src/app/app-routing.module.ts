import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { Project1Component } from './Pages/project1/project1.component';
import { Project2Component } from './Pages/project2/project2.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Expansion', component: Project1Component },
  { path: 'Innovation', component: Project2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
