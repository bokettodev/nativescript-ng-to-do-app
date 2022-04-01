import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ToDoItem } from "~/app/shared/interfaces/to-do-item.interface";
import { trackByFn } from "~/app/shared/functions/track-by-fn";

@Component({
  selector: "ToDoItems",
  templateUrl: "./to-do-items.component.html",
  styleUrls: ["./to-do-items.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoItemsComponent implements OnInit {
  readonly trackByIdFn = trackByFn("id");
  items: ToDoItem[] = [
    { id: 0, text: "111", done: false },
    { id: 1, text: "222", done: false },
  ];

  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  toggleItem(item: ToDoItem): void {
    item.done = !item.done;
  }

  deleteItem(item: ToDoItem): void {
    this.items = this.items.filter((i) => i !== item);
  }
}
