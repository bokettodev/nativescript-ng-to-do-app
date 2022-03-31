import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ToDoItems",
  templateUrl: "./to-do-items.component.html",
  styleUrls: ["./to-do-items.component.scss"],
})
export class ToDoItemsComponent implements OnInit {
  arr = [
    111, 222, 333, 444, 555, 666, 777, 888, 999, 999, 999, 999, 999, 999, 999,
    999, 999, 999, 999,
  ];

  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }
}
