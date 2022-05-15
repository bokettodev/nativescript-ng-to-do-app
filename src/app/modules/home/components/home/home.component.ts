import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ScrollView, TextField } from "@nativescript/core";
import { ToDoItem } from "../../interfaces";
import { uuid } from "../../../../shared/functions";
import { HomeStoreService } from "../../services";

@Component({
  selector: "Home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  items?: ToDoItem[];

  @ViewChild("itemsScrollView", { static: true })
  private readonly itemsScrollViewElementRef: ElementRef<ScrollView>;

  constructor(
    private readonly homeStore: HomeStoreService,
    private readonly cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.homeStore.itemsScrollView = this.itemsScrollView;
    this.initListeners();
  }

  toggleItem(item: ToDoItem): void {
    item.done = !item.done;
    item.editedAt = new Date();
    this.homeStore.setItems({ items: this.items });
  }

  deleteItem(item: ToDoItem): void {
    if (!this.items?.length) {
      return;
    }
    this.items = this.items.filter((i) => i !== item);
    this.homeStore.setItems({ items: this.items });
  }

  addItem(textField: TextField): void {
    textField.text = textField.text?.trim();
    if (!textField.text) {
      return;
    }

    const date = new Date();
    const item: ToDoItem = {
      id: uuid(),
      text: textField.text,
      done: false,
      createdAt: date,
      editedAt: date,
    };

    this.items = this.items ? [item, ...this.items] : [item];
    this.homeStore.setItems({ items: this.items });
    textField.text = "";
    this.itemsScrollView.scrollToVerticalOffset(0, true);
  }

  private get itemsScrollView(): ScrollView {
    return this.itemsScrollViewElementRef.nativeElement;
  }

  private initListeners(): void {
    this.homeStore.items$.subscribe((items) => {
      this.items = items;
      this.cdRef.detectChanges();
    });
  }
}
