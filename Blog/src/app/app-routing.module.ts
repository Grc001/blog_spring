import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { ArticlesListPageComponent } from './pages/articles-list-page/articles-list-page.component';


const routes: Routes = [
  {
    path : "",
    component : HomePageComponent
  },
  {
    path : "articles",
    component : ArticlesListPageComponent },
  {
    path : "articles/:articleId",
    component : ArticlePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
