import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { TextField } from "@nativescript/core";

@Component({
  selector: "InputText",
  templateUrl: "./input-text.component.html",
  styleUrls: ["./input-text.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextComponent implements OnChanges {
  @ViewChild("textField", { static: true })
  readonly textFieldElementRef: ElementRef<TextField>;

  @Input() width: string | number = "100%";
  @Input() height: string | number = 40;
  @Input() hint = "Type here...";
  @Input() text: string;

  @Output() readonly returnPress = new EventEmitter<TextField>();

  get textField(): TextField {
    return this.textFieldElementRef.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.text) {
      this.textField.text = this.text;
    }
  }

  onReturnPress(): void {
    this.returnPress.emit(this.textField);
  }
}
