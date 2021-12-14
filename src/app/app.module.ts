import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { SongItemComponent } from './song/song-item/song-item.component';
import { ProductSingleItemComponent } from './product/product-single-item/product-single-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    SongItemComponent,
    ProductSingleItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
