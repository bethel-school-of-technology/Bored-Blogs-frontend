import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootDemoComponent } from './boot-demo/boot-demo.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { HomeComponent } from './home/home.component';
import { AllPostComponent } from './all-post/all-post.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ContributersProfileComponent } from './contributers-profile/contributers-profile.component';
import { PostDetailComponent } from './all-post/post-detail/post-detail.component';
import { PostListComponent } from './admin-dashboard/post-list/post-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PostAddComponent } from './admin-dashboard/post-add/post-add.component';
import { PostEditComponent } from './admin-dashboard/post-edit/post-edit.component';
import { PostCommentComponent } from './all-post/post-comment/post-comment.component';
import { CommentDeleteComponent } from './all-post/comment-delete/comment-delete.component';
import { CommentEditComponent } from './all-post/comment-edit/comment-edit.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { ContribEditComponent } from './admin-dashboard/contrib-edit/contrib-edit.component';
import { UserSubmissionDetailsComponent } from './admin-dashboard/user-submission-details/user-submission-details.component';


// module is self explanatory
@NgModule({
  declarations: [
    BootDemoComponent,
    HomeComponent,
    ContributorsComponent,
    AllPostComponent,
    SignInComponent,
    ContactUsComponent,
    CreateAccountComponent,
    ContributersProfileComponent,
    PostDetailComponent,
    PostListComponent,
    AdminDashboardComponent,
    PostAddComponent,
    PostEditComponent,
    PostCommentComponent,
    CommentDeleteComponent,
    CommentEditComponent,
    UsersListComponent,
    UserProfileComponent,
    SignOutComponent,
    ContribEditComponent,
    UserSubmissionDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    BootDemoComponent,
    ContributorsComponent,
    HomeComponent,
    AllPostComponent,
    SignInComponent,
    ContactUsComponent,
    PostDetailComponent,
    PostEditComponent,
    PostAddComponent,
    PostListComponent,
    UserProfileComponent,
    ContribEditComponent
  ]
})
export class PagesModule { }
