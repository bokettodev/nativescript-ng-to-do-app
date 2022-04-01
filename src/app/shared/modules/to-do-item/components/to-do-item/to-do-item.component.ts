import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { ToDoItem } from "../../../../interfaces/to-do-item.interface";

@Component({
  selector: "ToDoItem",
  templateUrl: "./to-do-item.component.html",
  styleUrls: ["./to-do-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoItemComponent {
  @Input() item: ToDoItem;
  @Output() readonly onToggle = new EventEmitter<ToDoItem>();
  @Output() readonly onDelete = new EventEmitter<ToDoItem>();
}
