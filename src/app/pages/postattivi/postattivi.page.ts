import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from 'src/app/models/post';
import * as Service from 'src/app/app.service';
@Component({
  templateUrl: './postattivi.page.html',
  styleUrls: ['./postattivi.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostattiviPage implements OnInit {
  posts: Post[] = Service.getAttivi();
  constructor() {}

  ngOnInit(): void {}

  disattiva(post: Post) {
    Service.disattivaPost(post);
    this.posts=Service.getAttivi();
  }
}
