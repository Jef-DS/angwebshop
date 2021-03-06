import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { SongItemComponent } from './song/song-item/song-item.component';
import { ProductSingleItemComponent } from './product/product-single-item/product-single-item.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { SongSingleItemComponent } from './song/song-single-item/song-single-item.component';
import { SongListComponent } from './song/song-list/song-list.component';
import { FormsModule } from '@angular/forms';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { CreateSongComponent } from './song/create-song/create-song.component';
import { AppRoutesModule } from './app-routes.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    SongItemComponent,
    ProductSingleItemComponent,
    ProductListComponent,
    SongSingleItemComponent,
    SongListComponent,
    CreateProductComponent,
    CreateSongComponent,
    HomepageComponent,
    ErrorpageComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }