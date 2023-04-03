import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-articles-list-page',
  templateUrl: './admin-articles-list-page.component.html',
  styleUrls: ['./admin-articles-list-page.component.css']
})
export class AdminArticlesListPageComponent {
  listOfArticles : any;
constructor(private service : ApiService) {
}
ngOnInit(){
  this.getArticleListFromService()
}
getArticleListFromService(){
  this.service.getArticleList().subscribe((data) => {this.listOfArticles = data;
 
});

   
}

}