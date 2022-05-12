import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { HomeRoutingModule } from "./home-routing.module";
import { InputTextModule } from "../../shared/modules/input-text";
import {
  HomeComponent,
  ToDoItemComponent,
  ToDoItemsComponent,
} from "./components";

@NgModule({
  imports: [NativeScriptCommonModule, HomeRoutingModule, InputTextModule],
  declarations: [HomeComponent, ToDoItemComponent, ToDoItemsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
