import { Injectable } from "@angular/core";
import { TodoItem } from "../models/todo-item";
import { BehaviorSubject } from "rxjs";
import * as faker from "faker";

@Injectable()
export class DataService {
  private stopAtDepth: number = 4;
  public FakeTreeData = new BehaviorSubject<TodoItem[]>(null);

  constructor() {
    this.FakeTreeData.next(this.GenerateRandomTree(1, 1));
  }

  private GenerateRandomTree(count: number, level: number): TodoItem[] {
    let array: TodoItem[] = [];
    for (let index = 0; index < count; index++) {
      array.push(<TodoItem>{
        Id: faker.name.findName(),
        Name: faker.name.findName(),
        Expanded: true,
        Children:
          level <= this.stopAtDepth
            ? this.GenerateRandomTree(faker.random.number({min:1, max:4}), level + 1)
            : []
      });
    }
    return array;
  }
}
