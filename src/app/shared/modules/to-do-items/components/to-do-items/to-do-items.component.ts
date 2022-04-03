import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { ToDoItem } from "~/app/shared/interfaces/to-do-item.interface";
import { trackByFn } from "~/app/shared/functions/track-by-fn";

@Component({
  selector: "ToDoItems",
  templateUrl: "./to-do-items.component.html",
  styleUrls: ["./to-do-items.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoItemsComponent {
  @Input() items: ToDoItem[];
  @Output() readonly onToggle = new EventEmitter<ToDoItem>();
  @Output() readonly onDelete = new EventEmitter<ToDoItem>();

  readonly trackByIdFn = trackByFn("id");

  toggleItem(item: ToDoItem): void {
    this.onToggle.emit(item);
  }

  deleteItem(item: ToDoItem): void {
    this.onDelete.emit(item);
  }
}
