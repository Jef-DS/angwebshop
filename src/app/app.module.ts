import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { SongItemComponent } from './song/song-item/song-item.component';
import { ProductSingleItemComponent } from './product/product-single-item/product-single-item.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { SongSingleItemComponent } from './song/song-single-item/song-single-item.component';
import { SongListComponent } from './song/song-list/song-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    SongItemComponent,
    ProductSingleItemComponent,
    ProductListComponent,
    SongSingleItemComponent,
    SongListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
