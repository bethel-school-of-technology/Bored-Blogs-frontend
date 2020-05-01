import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BootDemoComponent } from './pages/boot-demo/boot-demo.component';
import { AllPostComponent } from './pages/all-post/all-post.component';
import { HomeComponent } from './pages/home/home.component';
import { ContributorsComponent } from './pages/contributors/contributors.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';


const make = (url: string, title: String, component: any) => {
  return {
    path: url,
    title: title,
    component: component,
  }
};
/*
I made this class so other components can get a refrence to the routes and page components


R = routes
use R.getRoutes() to get routes
*/

export class R {
  private static outes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    // NAVBAR Titles & Order
    make('home', 'Home', HomeComponent),
    make('boot', 'Bootstrap Demo', BootDemoComponent),
    //make('contributor', 'Meet the Contributors', ContributorsComponent),
    make('all', 'View All Posts', AllPostComponent),
    make('sign-in', 'Sign In', SignInComponent),
    make('create-account', 'Create Account', CreateAccountComponent),
    make('contact-us', 'Conact Us', ContactUsComponent)
  ];

  static getRoutes(): Routes {
    return R.outes;
  }

  static getPaths(): string[] {
    return R.outes.filter(e => e['redirectTo'] !== undefined).map(e => e.path);
  }

  static getComponent(): any[] {
    return R.outes.filter(e => e['component'] !== undefined).map(e => e.component);
  }
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(R.getRoutes())],
  exports: [RouterModule]
})
export class AppRoutingModule { }
