import { NgModule } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { ScrollDispatchModule } from "@angular/cdk/scrolling";

const passThrough = [MatMenuModule, ScrollDispatchModule];

@NgModule({
  imports: passThrough,
  exports: passThrough
})
export class MaterialModule {}
