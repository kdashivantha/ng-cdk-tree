import { Component, OnInit } from "@angular/core";
import { TreeBase } from "../../models/tree-base";
import { DataService } from "../../services/data-service";
import { TodoItem } from "../../models/todo-item";
import { ArrayDataSource } from "@angular/cdk/collections";

@Component({
  selector: "app-normal-tree",
  templateUrl: "./normal-tree.component.html",
  styleUrls: ["./normal-tree.component.scss"]
})
export class NormalTreeComponent extends TreeBase<TodoItem> implements OnInit {
  constructor(private dataService: DataService) {
    super();

    this.dataService.FakeTreeData.subscribe(data => {
      if (data) {
        this.TreeData = new ArrayDataSource(data);
        this.treeControl.dataNodes = data;
        this.ClickNode(this.treeControl.dataNodes[0]);
      }
    });
  }

  ngOnInit(): void {}

  public ClickNode(node: TodoItem): void {
    this.selectionModel.select(node);
  }
}
