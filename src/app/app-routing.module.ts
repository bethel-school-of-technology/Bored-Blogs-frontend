import { UserSubmissionDetailsComponent } from './pages/admin-dashboard/user-submission-details/user-submission-details.component';
import { UsersListComponent } from "./pages/admin-dashboard/users-list/users-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BootDemoComponent } from "./pages/boot-demo/boot-demo.component";
import { AllPostComponent } from "./pages/all-post/all-post.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContributorsComponent } from "./pages/contributors/contributors.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { CreateAccountComponent } from "./pages/create-account/create-account.component";
import { PostDetailComponent } from "./pages/all-post/post-detail/post-detail.component";
import { AdminDashboardComponent } from "./pages/admin-dashboard/admin-dashboard.component";
import { PostListComponent } from "./pages/admin-dashboard/post-list/post-list.component";
import { PostAddComponent } from "./pages/admin-dashboard/post-add/post-add.component";
import { UserProfileComponent } from "./pages/user-profile/user-profile.component";
import { ContributersProfileComponent } from "./pages/contributers-profile/contributers-profile.component";
import { PostEditComponent } from './pages/admin-dashboard/post-edit/post-edit.component';
import { StoreSearchComponent } from './pages/store-search/store-search.component';

const make = (
  url: string,
  title: string,
  component: any,
  isPartOfNav: boolean
) => {
  return {
    path: url,
    title: title,
    component: component,
    isPartOfNav: isPartOfNav,
  };
};
/*
I made this class so other components can get a reference to the routes and page components


R = routes
use R.getRoutes() to get routes
*/

export class R {
         private static outes: Routes = [
           {
             path: "",
             redirectTo: "/home",
             pathMatch: "full",
           },
           // NAVBAR Titles & Order
           make("home", "Home", HomeComponent, true),
           make("store", "Find a place to play", StoreSearchComponent, true),
           make("boot", "Bootstrap Demo", BootDemoComponent, false), //for testing
           make("posts", "View All Posts", AllPostComponent, false), //hard-coded in navbar.html
           make(
             "contributor",
             "Meet the Contributors",
             ContributorsComponent,
             false
           ), //In nav "Contributors" dropdown list
           make("contact-us", "Contact Us", ContactUsComponent, false), //In nav "Users" dropdown list as Submit a Blog Request
           make("sign-in", "Log In", SignInComponent, false), //hard-coded in navbar.html
           make(
             "contributor-profile/:id",
             "Contributor Profile",
             ContributersProfileComponent,
             false
           ), //In nav "Contributors" dropdown list
           make(
             "create-account",
             "Create account",
             CreateAccountComponent,
             false
           ), //hard-coded in navbar.html
           make("post-add", "post add", PostAddComponent, false),
           make("post-edit/:id", "Post Detail", PostEditComponent, false),
           make("post-detail/:id", "Post Detail", PostDetailComponent, false),
           make("post-list", "Post List", PostListComponent, false),
           make("admin", "Admin", AdminDashboardComponent, false),
           make("users-list", "users-list", UsersListComponent, false),
           make(
             "user-profile/:id",
             "User Profile",
             UserProfileComponent,
             false
           ), //In nav "Users" dropdown list
           make(
             "user-submission-details",
             "User Submission Details",
             UserSubmissionDetailsComponent,
             false
           ),
         ];

         static getRoutes(): Routes {
           return R.outes;
         }

         static getRoutesForNavigation(): Routes {
           return R.outes.filter((e: any) => e.isPartOfNav);
         }

         static getPaths(): string[] {
           return R.outes
             .filter((e) => e["redirectTo"] !== undefined)
             .map((e) => e.path);
         }

         static getComponent(): any[] {
           return R.outes
             .filter((e) => e["component"] !== undefined)
             .map((e) => e.component);
         }
       }

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(R.getRoutes())],
  exports: [RouterModule],
})
export class AppRoutingModule {}
