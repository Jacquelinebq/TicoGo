import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from "./home/home.module";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => HomeModule,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      anchorScrolling: "enabled",
      scrollOffset: [0, 70],
      scrollPositionRestoration: "top",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

