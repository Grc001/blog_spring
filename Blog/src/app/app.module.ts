import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlesListPageComponent } from './pages/articles-list-page/articles-list-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { HttpClientModule } from '@angular/common/http';
import {ApiService} from "./services/api.service";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArticlesListPageComponent,
    ArticlePageComponent,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
