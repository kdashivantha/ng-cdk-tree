import { TreeNode } from '../interfaces/tree-node';
import { ArrayDataSource, SelectionModel } from '@angular/cdk/collections';
import { NestedTreeControl } from '@angular/cdk/tree';

export abstract class TreeBase<T extends TreeNode<T>> {
    private _selectedItem: T;
    private _treeData: ArrayDataSource<T>;
    public treeControl: NestedTreeControl<T>;
    public selectionModel: SelectionModel<T>;
  
    constructor(multiSelect: boolean = false) {
      this.treeControl = new NestedTreeControl<T>(node => <T[]>node.Children);
      this.selectionModel = new SelectionModel(multiSelect);
    }
  
    public hasChild = (_: number, node: T) =>
      !!node.Children && node.Children.length > 0;
    public IsSelected = (node: T) => this.selectionModel.isSelected(node);
    public IsExpanded = (node: T) => node.Expanded;
  
    public get TreeData() {
      return this._treeData;
    }
    public set TreeData(data: ArrayDataSource<T>) {
      this._treeData = data;
    }
  
    public get SelectedItem(): T {
      return this._selectedItem;
    }
    public set SelectedItem(v: T) {
      this._selectedItem = v;
    }
    /** Whether all the descendants of the node are selected */
    public DescendantsAllSelected(node: T): boolean {
      const descendants = this.treeControl.getDescendants(node);
      node.Selected = descendants.every(child => child.Selected);
      return node.Selected;
    }
  
    /** Whether part of the descendants are selected */
    public DescendantsPartiallySelected(node: T): boolean {
      const descendants = this.treeControl.getDescendants(node);
      const result = descendants.some(child => child.Selected);
      return result && !this.DescendantsAllSelected(node);
    }
  
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    public ParentSelectionToggle(node: T): void {
      node.Selected = !node.Selected;
      const descendants = this.treeControl.getDescendants(node);
      descendants.forEach((child)=>{
        child.Selected = node.Selected;
      });
    }
  
    /**
     * node click event
     * @returns void
     */
    abstract ClickNode(node: T): void;
  }
  