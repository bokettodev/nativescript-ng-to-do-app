import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import {
  FlexboxLayout,
  GestureStateTypes,
  PanGestureEventData,
} from "@nativescript/core";
import { ToDoItem } from "../../interfaces";

@Component({
  selector: "ToDoItem",
  templateUrl: "./to-do-item.component.html",
  styleUrls: ["./to-do-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoItemComponent {
  @ViewChild("itemRef", { static: true }) itemRef: ElementRef<FlexboxLayout>;
  @Input() item: ToDoItem;
  @Output() readonly toggle = new EventEmitter<ToDoItem>();
  @Output() readonly delete = new EventEmitter<ToDoItem>();

  get itemView(): FlexboxLayout {
    return this.itemRef.nativeElement;
  }

  onTap(): void {
    this.toggle.emit(this.item);
  }

  onPan({ deltaX, state }: PanGestureEventData): void {
    if (state === GestureStateTypes.ended) {
      this.onPanEnd(deltaX);
    } else {
      this.itemView.translateX = deltaX;
    }
  }

  private onPanEnd(deltaX: number): void {
    const itemViewHalfWidth = this.itemView.getActualSize().width / 2;

    if (Math.abs(deltaX) > itemViewHalfWidth) {
      this.delete.emit(this.item);
    } else {
      this.itemView.translateX = 0;
    }
  }
}
