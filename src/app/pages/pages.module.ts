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
import { PostListComponent } from './all-post/post-list/post-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


//module is self explanatory
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
    AdminDashboardComponent
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
    PostListComponent
  ]
})
export class PagesModule { }
