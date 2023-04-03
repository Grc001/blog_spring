import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-articles-list-page',
  templateUrl: './articles-list-page.component.html',
  styleUrls: ['./articles-list-page.component.css']
})
export class ArticlesListPageComponent {
constructor(private service : ApiService) {
}
  ngOnInit(){
  this.service.getArticleList()
}
}
