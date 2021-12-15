import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { SongListComponent } from './song/song-list/song-list.component';

const appRoutes: Routes = [
  {path:'', redirectTo:"/home", pathMatch: 'full'},
  {path:'home', component: HomepageComponent},
  {path:'products', component: ProductListComponent},
  {path:'products/:code', component:ProductDetailsComponent},
  {path: 'songs', component:SongListComponent},
  {path:'**', component:ErrorpageComponent}
];

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