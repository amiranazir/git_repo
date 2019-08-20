import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getRepoList(q: String, page: Number = 1): Observable<any> {
    let query = "https://api.github.com/search/repositories?q=" + q + "&per_page=5&page=" + page;
    return this.http.get(query);
  }
}
