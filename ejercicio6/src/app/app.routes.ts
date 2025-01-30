import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserPostComponent } from "./components/user-post/user-post.component";
import { InicioComponent } from "./components/inicio/inicio.component";

export const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "user", component: UserListComponent},
  {path: "post", component: UserPostComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
