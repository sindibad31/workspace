import { Component } from '@angular/core';
import {Article} from './article/article.modele';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 10),
      new Article('fillstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1)
    ];
  }



  addArticle(title: string, link: string): boolean {

    this.articles.push(new Article(title, link));
    console.log(this.articles);
    return false;
  }
}
