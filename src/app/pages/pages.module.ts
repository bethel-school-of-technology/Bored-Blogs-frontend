import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootDemoComponent } from './boot-demo/boot-demo.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { HomeComponent } from './home/home.component';
import { AllPostComponent } from './all-post/all-post.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    BootDemoComponent,
    ContributorsComponent,
    HomeComponent,
    AllPostComponent,
    SignInComponent,
    ContactUsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BootDemoComponent,
    ContributorsComponent,
    HomeComponent,
    AllPostComponent,
    SignInComponent,
    ContactUsComponent,
  ]
})
export class PagesModule { }
