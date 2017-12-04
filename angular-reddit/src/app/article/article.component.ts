import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Article} from './article.modele';

// app-artice tag is de host component

@Component({
  selector: 'app-article', // The selector is a tag name
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  /*
 Using the @hostBinding the host element (the app-article tag)
   we want to set the class attribute to have "row"
*/
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }
}
