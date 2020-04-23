import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BootDemoComponent } from './pages/boot-demo/boot-demo.component';
import { AllPostComponent } from './pages/all-post/all-post.component';
import { HomeComponent } from './pages/home/home.component';

let make = (url: string, title: String, component: any) => {
  return {
    path: url,
    title: title,
    component: component,
  }
};

//I made this class so other components can get a refrence to the routes and page components
export class R {
  private static outes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    make('home', 'home', HomeComponent),
    make('boot', 'Boot strap demo', BootDemoComponent),
    make('all', 'all', AllPostComponent),
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
