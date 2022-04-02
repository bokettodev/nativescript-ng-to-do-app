import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./components/home.component";
import { ToDoItemsModule } from "../../shared/modules/to-do-items/to-do-items.module";
import { InputTextModule } from "../../shared/modules/input-text/input-text.module";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    HomeRoutingModule,
    ToDoItemsModule,
    InputTextModule,
  ],
  declarations: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
