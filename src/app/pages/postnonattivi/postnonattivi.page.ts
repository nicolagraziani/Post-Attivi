import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import * as Service from 'src/app/app.service';
@Component({
  templateUrl: './postnonattivi.page.html',
  styleUrls: ['./postnonattivi.page.scss'],
})
export class PostnonattiviPage implements OnInit {
  posts: Post[] = Service.getNonAttivi();
  constructor() {}

  ngOnInit(): void {}

  attiva(post: Post) {
    Service.attivaPost(post);
    this.posts=Service.getNonAttivi();
  }
}
