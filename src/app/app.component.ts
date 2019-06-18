import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "krycinema";
  items = Array.from({ length: 100 }).map((_, i) => `Item #${i}`);
}
