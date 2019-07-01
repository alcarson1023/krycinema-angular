import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatMenuModule } from "@angular/material/menu";
import { ScrollDispatchModule } from "@angular/cdk/scrolling";
import { Scroll } from "@angular/router";
import { GalleryComponent } from "./gallery/gallery.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { WeddingsComponent } from "./weddings/weddings.component";
import { SurpriseComponent } from "./surprise/surprise.component";
import { MissingPageComponent } from "./missing-page/missing-page.component";

import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { CinemaComponent } from './cinema/cinema.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HomeComponent,
    ContactComponent,
    WeddingsComponent,
    SurpriseComponent,
    MissingPageComponent,
    CinemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    ScrollDispatchModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
