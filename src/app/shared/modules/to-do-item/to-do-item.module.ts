import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { ToDoItemComponent } from "./components/to-do-item/to-do-item.component";

@NgModule({
  declarations: [ToDoItemComponent],
  imports: [NativeScriptCommonModule],
  exports: [ToDoItemComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ToDoItemModule {}
