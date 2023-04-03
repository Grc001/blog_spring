import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }
  getArticleList(){
    return this.http.get<any>("http://localhost:8080/articles")
  }
  getLatestList(){
    return this.http.get<any>("http://localhost:8080/articles/latest")
  }
  getArticle(id : any){
    return this.http.get<any>(`http://localhost:8080/articles/${id}`)
  }
}
