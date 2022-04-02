import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
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
  readonly trackByIdFn = trackByFn("id");

  toggleItem(item: ToDoItem): void {
    item.done = !item.done;
  }

  deleteItem(item: ToDoItem): void {
    this.items = this.items.filter((i) => i !== item);
  }
}
