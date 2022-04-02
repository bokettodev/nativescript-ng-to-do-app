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
  @Input() width: string | number = "100%";
  @Input() height: string | number = 40;
  @Input() hint = "Type here...";
  @Input() text: string;

  @Output() readonly textChange = new EventEmitter<TextField>();
  @Output() readonly returnPress = new EventEmitter<TextField>();
  @Output() readonly focus = new EventEmitter<TextField>();
  @Output() readonly blur = new EventEmitter<TextField>();

  @ViewChild("textField", { static: true })
  private readonly textFieldElementRef!: ElementRef<TextField>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.text) {
      this.textField.text = this.text;
    }
  }

  onTextChange(): void {
    this.textChange.emit(this.textField);
  }

  onReturnPress(): void {
    this.returnPress.emit(this.textField);
  }

  onFocus(): void {
    this.focus.emit(this.textField);
  }

  onBlur(): void {
    this.blur.emit(this.textField);
  }

  private get textField(): TextField {
    return this.textFieldElementRef.nativeElement;
  }
}
