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
import { HomeStoreService } from "../../services";

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

  private lastPanEvent?: PanGestureEventData;

  constructor(private readonly homeStore: HomeStoreService) {}

  get itemView(): FlexboxLayout {
    return this.itemRef.nativeElement;
  }

  onTap(): void {
    this.toggle.emit(this.item);
  }

  onPan(event: PanGestureEventData): void {
    if (
      event.state === GestureStateTypes.ended ||
      event.state === GestureStateTypes.cancelled
    ) {
      this.onPanEnd(event);
    } else {
      this.onPanBegunOrChanged(event);
    }
    this.lastPanEvent = event;
  }

  private onPanBegunOrChanged(event: PanGestureEventData): void {
    const deltaYToLast = this.lastPanEvent
      ? Math.abs(this.lastPanEvent.deltaY - event.deltaY)
      : event.deltaY;

    const deltaXToLast = this.lastPanEvent
      ? Math.abs(this.lastPanEvent.deltaX - event.deltaX)
      : event.deltaX;

    if (deltaYToLast > deltaXToLast) {
      this.homeStore.itemsScrollView.isUserInteractionEnabled = true;
      return;
    }

    this.homeStore.itemsScrollView.isUserInteractionEnabled = false;
    this.itemView.translateX = event.deltaX;
  }

  private onPanEnd(event: PanGestureEventData): void {
    this.homeStore.itemsScrollView.isUserInteractionEnabled = true;
    const itemViewHalfWidth = this.itemView.getActualSize().width / 2;

    if (Math.abs(event.deltaX) > itemViewHalfWidth) {
      this.delete.emit(this.item);
    } else {
      this.itemView.translateX = 0;
    }
  }
}
