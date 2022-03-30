import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { ToDoItemModule } from "../to-do-item/to-do-item.module";
import { ToDoItemsComponent } from "./components/to-do-items/to-do-items.component";

@NgModule({
  declarations: [ToDoItemsComponent],
  imports: [NativeScriptCommonModule, ToDoItemModule],
  exports: [ToDoItemsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ToDoItemsModule {}
