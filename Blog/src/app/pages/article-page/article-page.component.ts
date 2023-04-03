import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent {
article : any;

articleId! : number
  constructor(private route : ActivatedRoute ,private service : ApiService) {
  }
  ngOnInit(){
    this.route.params.subscribe((params) =>{this.articleId = parseInt(params['articleId']);
  this.service.getArticle(this.articleId).subscribe((data) => {this.article = data})
  })}
  
  
}
