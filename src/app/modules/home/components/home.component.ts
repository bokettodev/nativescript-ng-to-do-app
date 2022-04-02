import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { TextField } from "@nativescript/core";
import { ToDoItem } from "~/app/shared/interfaces/to-do-item.interface";

@Component({
  selector: "Home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  uid: number = 0;
  items: ToDoItem[] = [
    { id: this.uid++, text: this.uid.toString(), done: false },
    { id: this.uid++, text: this.uid.toString(), done: false },
    { id: this.uid++, text: this.uid.toString(), done: false },
    { id: this.uid++, text: this.uid.toString(), done: false },
    { id: this.uid++, text: this.uid.toString(), done: false },
    { id: this.uid++, text: this.uid.toString(), done: false },
    { id: this.uid++, text: this.uid.toString(), done: false },
    { id: this.uid++, text: this.uid.toString(), done: false },
    { id: this.uid++, text: this.uid.toString(), done: false },
    { id: this.uid++, text: this.uid.toString(), done: false },
    { id: this.uid++, text: this.uid.toString(), done: false },
    { id: this.uid++, text: this.uid.toString(), done: false },
    { id: this.uid++, text: this.uid.toString(), done: false },
    { id: this.uid++, text: this.uid.toString(), done: false },
    { id: this.uid++, text: this.uid.toString(), done: false },
    { id: this.uid++, text: this.uid.toString(), done: false },
    { id: this.uid++, text: this.uid.toString(), done: false },
  ];

  ngOnInit(): void {}

  addItem(textField: TextField): void {
    textField.text = textField.text?.trim();
    if (!textField.text) {
      return;
    }

    this.items = [
      {
        id: this.uid++,
        text: textField.text,
        done: false,
      },
      ...this.items,
    ];
    textField.text = "";
  }
}
