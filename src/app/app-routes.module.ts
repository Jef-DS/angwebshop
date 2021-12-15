import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const appRoutes: Routes= [
  {path:'', redirectTo:"/home", pathMatch: 'full'},
  {path:'home', component:HomepageComponent},
  {path:'**', component:ErrorpageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }