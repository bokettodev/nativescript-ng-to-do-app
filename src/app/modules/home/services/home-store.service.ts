import { Injectable } from "@angular/core";
import { File, knownFolders, ScrollView } from "@nativescript/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ToDoItem } from "../interfaces";

@Injectable()
export class HomeStoreService {
  items$: Observable<ToDoItem[]>;
  itemsScrollView?: ScrollView;

  private itemsFile?: File;
  private readonly items$$ = new BehaviorSubject<ToDoItem[]>([]);

  constructor() {
    this.items$ = this.items$$.asObservable();
    this.initItemsJson();
    this.setItemsFromItemsJson();
  }

  setItems({ items }: { items: ToDoItem[] }): void {
    this.setLocalItems({ items });
    this.updateItemsJson();
  }

  private initItemsJson(): void {
    const documents = knownFolders.documents();
    const folder = documents.getFolder("store");
    this.itemsFile = folder.getFile("items.json");
  }

  private setItemsFromItemsJson(): void {
    this.itemsFile.readText().then((itemsJson) => {
      try {
        this.setLocalItems({ items: JSON.parse(itemsJson) });
      } catch {
        this.setLocalItems({ items: [] });
      }
    });
  }

  private setLocalItems({ items }: { items: ToDoItem[] }): void {
    items.sort((a, b) => {
      if (a.done !== b.done) {
        return +a.done - +b.done;
      }
      return +b.editedAt.valueOf() - +a.editedAt.valueOf();
    });

    this.items$$.next(items);
  }

  private updateItemsJson(): void {
    this.itemsFile
      .writeText(JSON.stringify(this.items$$.value))
      .then()
      .catch((err) => {
        console.error(err);
      });
  }
}
