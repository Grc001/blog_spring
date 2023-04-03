import { Component } from '@angular/core';
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {
  listOfArticles : any;
  constructor(private service : ApiService) {
  }
  ngOnInit(){
    this.getLatestArticles()
  }
  getLatestArticles(){
    this.service.getLatestList().subscribe((data) => {this.listOfArticles = data;
    console.log(data);
  });
  
     
  }
}
