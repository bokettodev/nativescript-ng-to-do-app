import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { ScrollView, TextField } from "@nativescript/core";
import { ToDoItem } from "../../interfaces";
import { uuid } from "../../../../shared/functions";

@Component({
  selector: "Home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  items: ToDoItem[] = [
    {
      id: null,
      text: null,
      done: false,
      createdAt: new Date(),
      editedAt: new Date(),
    },
    {
      id: null,
      text: null,
      done: false,
      createdAt: new Date(),
      editedAt: new Date(),
    },
    {
      id: null,
      text: null,
      done: false,
      createdAt: new Date(),
      editedAt: new Date(),
    },
    {
      id: null,
      text: null,
      done: false,
      createdAt: new Date(),
      editedAt: new Date(),
    },
    {
      id: null,
      text: null,
      done: false,
      createdAt: new Date(),
      editedAt: new Date(),
    },
    {
      id: null,
      text: null,
      done: false,
      createdAt: new Date(),
      editedAt: new Date(),
    },
    {
      id: null,
      text: null,
      done: false,
      createdAt: new Date(),
      editedAt: new Date(),
    },
    {
      id: null,
      text: null,
      done: false,
      createdAt: new Date(),
      editedAt: new Date(),
    },
    {
      id: null,
      text: null,
      done: false,
      createdAt: new Date(),
      editedAt: new Date(),
    },
    {
      id: null,
      text: null,
      done: false,
      createdAt: new Date(),
      editedAt: new Date(),
    },
    {
      id: null,
      text: null,
      done: false,
      createdAt: new Date(),
      editedAt: new Date(),
    },
    {
      id: null,
      text: null,
      done: false,
      createdAt: new Date(),
      editedAt: new Date(),
    },
    {
      id: null,
      text: null,
      done: false,
      createdAt: new Date(),
      editedAt: new Date(),
    },
    {
      id: null,
      text: null,
      done: false,
      createdAt: new Date(),
      editedAt: new Date(),
    },
    {
      id: null,
      text: null,
      done: false,
      createdAt: new Date(),
      editedAt: new Date(),
    },
    {
      id: null,
      text: null,
      done: false,
      createdAt: new Date(),
      editedAt: new Date(),
    },
    {
      id: null,
      text: null,
      done: false,
      createdAt: new Date(),
      editedAt: new Date(),
    },
  ];

  @ViewChild("itemsScrollView", { static: true })
  private readonly itemsScrollViewElementRef: ElementRef<ScrollView>;

  constructor() {
    this.items.forEach((i) => {
      const id = uuid();
      i.id = id;
      i.text = id;
    });
  }

  toggleItem(item: ToDoItem): void {
    item.done = !item.done;
    item.editedAt = new Date();

    this.items.sort((a, b) => {
      if (a.done !== b.done) {
        return +a.done - +b.done;
      }
      return +b.editedAt.valueOf() - +a.editedAt.valueOf();
    });
  }

  deleteItem(item: ToDoItem): void {
    this.items = this.items.filter((i) => i !== item);
  }

  addItem(textField: TextField): void {
    textField.text = textField.text?.trim();
    if (!textField.text) {
      return;
    }
    const date = new Date();

    this.items = [
      {
        id: uuid(),
        text: textField.text,
        done: false,
        createdAt: date,
        editedAt: date,
      },
      ...this.items,
    ];
    textField.text = "";

    this.itemsScrollView.scrollToVerticalOffset(0, true);
  }

  private get itemsScrollView(): ScrollView {
    return this.itemsScrollViewElementRef.nativeElement;
  }
}
