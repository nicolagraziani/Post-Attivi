import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostattiviPage } from './pages/postattivi/postattivi.page';
import { PostnonattiviPage } from './pages/postnonattivi/postnonattivi.page';
import { HomePage } from './pages/home/home.page';
import { UsersPage } from './pages/users/users.page';
import { BgTextDirective } from './bg-text.directive';
import { UserDetailPage } from './pages/user-detail/user-detail.page';
import { UserService } from './user.service';
import { PostDetailsPage } from './pages/post-details/post-details.page';

const routes:Route[] = [
  {
    path:'',
    component: HomePage
  },
  {
    path:'postattivi',
    component: PostattiviPage
  },
  {
    path:'postnonattivi',
    component: PostnonattiviPage
  },
  {
    path:'users',
    component: UsersPage,
    children: [
      {
        path:':id',
        component: UserDetailPage
      }
    ]
  },
  {
    path:'post-details',
    component: PostDetailsPage
  }

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostattiviPage,
    PostnonattiviPage,
    HomePage,
    UsersPage,
    BgTextDirective,
    UserDetailPage,
    PostDetailsPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
