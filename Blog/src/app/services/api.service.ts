import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getArticleList(){
    return this.http.get<any>(`localhost:8080/articles`)
  }
}
