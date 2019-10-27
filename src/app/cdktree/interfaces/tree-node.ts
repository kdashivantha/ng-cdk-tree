export interface TreeNode<T> {
  Id: string;
  Name: string;
  Children: T[];
  Expanded: boolean;
  Selected: boolean;
}
