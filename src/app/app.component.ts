import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
