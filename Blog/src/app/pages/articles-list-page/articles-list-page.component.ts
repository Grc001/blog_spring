import { Component } from '@angular/core';
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-articles-list-page',
  templateUrl: './articles-list-page.component.html',
  styleUrls: ['./articles-list-page.component.css']
})
export class ArticlesListPageComponent {
  listOfArticles : any;
constructor(private service : ApiService) {
}
ngOnInit(){
  this.getArticleListFromService()
}
getArticleListFromService(){
  this.service.getArticleList().subscribe((data) => {this.listOfArticles = data;
  console.log(data);
});

   
}

}
