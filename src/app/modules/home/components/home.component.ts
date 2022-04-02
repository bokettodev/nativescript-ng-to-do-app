import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { ScrollView, TextField } from "@nativescript/core";
import { ToDoItem } from "~/app/shared/interfaces/to-do-item.interface";

@Component({
  selector: "Home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  @ViewChild("itemsScrollView", { static: true })
  private readonly itemsScrollViewElementRef!: ElementRef<ScrollView>;

  private uid: number = 0;
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

    // setTimeout to wait for the keyboard to collapse.
    setTimeout(() => {
      this.itemsScrollView.scrollToVerticalOffset(0, true);
    });
  }

  private get itemsScrollView(): ScrollView {
    return this.itemsScrollViewElementRef.nativeElement;
  }
}
