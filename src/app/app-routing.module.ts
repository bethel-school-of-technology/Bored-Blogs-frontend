import { ContributersProfileComponent as ContributorsProfileComponent, ContributersProfileComponent } from './pages/contributers-profile/contributers-profile.component';
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
import { PostDetailComponent } from './pages/all-post/post-detail/post-detail.component';


const make = (url: string, title: string, component: any, isPartOfNav: boolean) => {
  return {
    path: url,
    title: title,
    component: component,
    isPartOfNav: isPartOfNav
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
    make('home', 'Home', HomeComponent, true),
    make('boot', 'Bootstrap Demo', BootDemoComponent, true),
    make('contributor', 'Meet the Contributors', ContributorsComponent, true),
    make('contributers-profile', 'Contributers Profile', ContributersProfileComponent, false),
    make('all', 'View All Posts', AllPostComponent, true),
    make('sign-in', 'Sign In', SignInComponent, true),
    make('contact-us', 'Contact Us', ContactUsComponent, true),
    make('create-account', 'Create account', CreateAccountComponent, true),
    make('post-detail', 'Post Detail', PostDetailComponent, false)
  ];

  static getRoutes(): Routes {
    return R.outes;
  }

  static getRoutesForNavigation(): Routes {
    return R.outes.filter((e: any) => e.isPartOfNav);
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
