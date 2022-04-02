import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { InputTextComponent } from "./components/input-text/input-text.component";

@NgModule({
  declarations: [InputTextComponent],
  imports: [NativeScriptCommonModule],
  exports: [InputTextComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class InputTextModule {}
