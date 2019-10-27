import { Injectable } from "@angular/core";
import { TodoItem } from "../models/todo-item";
import { BehaviorSubject } from "rxjs";
import * as faker from "faker";

@Injectable()
export class DataService {
  private stopAtDepth: number = 4;
  public FakeTreeData = new BehaviorSubject<TodoItem[]>(null);

  constructor() {
    this.FakeTreeData.next(this.GeberateRandomTree(1, 1));
  }

  private GeberateRandomTree(count: number, level: number): TodoItem[] {
    let array: TodoItem[] = [];
    for (let index = 0; index < count; index++) {
      array.push(<TodoItem>{
        Id: faker.name.findName(),
        Name: faker.name.findName(),
        Expanded: true,
        Children:
          level <= this.stopAtDepth
            ? this.GeberateRandomTree(faker.random.number(4), level + 1)
            : []
      });
    }
    return array;
  }
}
