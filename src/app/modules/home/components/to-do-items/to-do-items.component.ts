import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { ToDoItem } from "../../interfaces";
import { trackByFn } from "../../../../shared/functions";

@Component({
  selector: "ToDoItems",
  templateUrl: "./to-do-items.component.html",
  styleUrls: ["./to-do-items.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoItemsComponent {
  @Input() items: ToDoItem[];
  @Output() readonly toggle = new EventEmitter<ToDoItem>();
  @Output() readonly delete = new EventEmitter<ToDoItem>();

  readonly trackByIdFn = trackByFn("id");

  toggleItem(item: ToDoItem): void {
    this.toggle.emit(item);
  }

  deleteItem(item: ToDoItem): void {
    this.delete.emit(item);
  }
}
