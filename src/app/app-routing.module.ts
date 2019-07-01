import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { WeddingsComponent } from "./weddings/weddings.component";
import { CinemaComponent } from "./cinema/cinema.component";
import { ContactComponent } from "./contact/contact.component";
import { SurpriseComponent } from "./surprise/surprise.component";
import { MissingPageComponent } from "./missing-page/missing-page.component";

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: "home", component: HomeComponent },
        { path: "gallery", component: GalleryComponent },
        { path: "weddings", component: WeddingsComponent },
        { path: "cinema", component: CinemaComponent },
        { path: "contact", component: ContactComponent },
        { path: "surprise", component: SurpriseComponent },
        { path: "", redirectTo: "home", pathMatch: "full" },
        // { path: "**", redirectTo: "missing-page", pathMatch: "full" }
        { path: "**", component: MissingPageComponent, pathMatch: "full" }
      ],
      { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
