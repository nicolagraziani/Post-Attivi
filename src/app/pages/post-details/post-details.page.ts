import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import * as Service from 'src/app/app.service';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post';

@Component({
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
})
export class PostDetailsPage implements OnInit {
  post!: Post | undefined;
  sub!: Subscription;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params: Params) => {
      this.post = <Post>params;
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }
}
