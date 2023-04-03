import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { ArticlesListPageComponent } from './pages/articles-list-page/articles-list-page.component';
import { AdminArticlePageComponent } from './pages/admin/admin-article-page/admin-article-page.component';
import { AdminArticlesListPageComponent } from './pages/admin/admin-articles-list-page/admin-articles-list-page.component';
import { AdminCreateArticlePageComponent } from './pages/admin/admin-create-article-page/admin-create-article-page.component';
import { AdminMenuPageComponent } from './pages/admin/admin-menu-page/admin-menu-page.component';
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
  },
  {
    path : "admin",
    component : AdminMenuPageComponent
  },
  {
    path : "admin/articles",
    component : AdminArticlesListPageComponent },
  {
    path : "admin/articles/:articleId",
    component : AdminArticlePageComponent
  },
  {
    path : "admin/articles/create",
    component : AdminCreateArticlePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
