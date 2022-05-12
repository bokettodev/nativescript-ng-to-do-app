import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { InputTextComponent } from "./components";

@NgModule({
  declarations: [InputTextComponent],
  imports: [NativeScriptCommonModule],
  exports: [InputTextComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class InputTextModule {}
