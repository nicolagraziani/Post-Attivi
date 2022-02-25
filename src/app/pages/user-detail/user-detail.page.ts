import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/user.service';
import { Subscription } from 'rxjs';
import { EmailValidator } from '@angular/forms';


@Component({
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
  user!: User|undefined;
  sub!:Subscription;

  constructor(
    private router: ActivatedRoute,
    private usersSrv: UserService
  ) {}

  ngOnInit(): void {
    // this.user = {
    //   id: this.router.snapshot.params['id'],
    //   nome: this.router.snapshot.params['name'],
    //   cognome: this.router.snapshot.params['surname'],
    //   email: this.router.snapshot.params['email'],
    //   ruolo: this.router.snapshot.params['role']
    // }

    this.sub = this.router.params.subscribe((params:Params)=>{
      const id = +params["id"];
      this.user = this.usersSrv.getUser(id);
    })
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }
}
