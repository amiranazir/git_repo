import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'git-repo';

  collectionSize: number;
  query: string;

  repo: any = [];

  constructor(private api: ApiService) {
  }

  repoList(q, page) {
    this.api.getRepoList(q, page).subscribe((data) => {
      if (data) {
        this.collectionSize = data.total_count;
        this.repo = data.items;
      }
    })
  }

  loadPage(e) {
    this.repoList(this.query, e);
  }

  search() {
    this.loadPage(1);
  }
}
