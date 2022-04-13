import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface MachineNode {
  name: string;
  children?: MachineNode[];
}

const TREE_DATA: MachineNode[] = [
  {
    name: 'Machine',
    children: [{ name: '1' }, { name: '2' }, { name: '3' }],
  },
  {
    name: 'Machine Type 2',
    children: [
      {
        name: 'Type 1',
        children: [{ name: 'Name' }, { name: 'Name 2' }],
      },
      {
        name: 'Type 2',
        children: [{ name: 'Name 3' }, { name: 'Name 3' }],
      },
    ],
  },
];

@Component({
  selector: 'app-create-digital-twin',
  templateUrl: './create-digital-twin.component.html',
  styleUrls: ['./create-digital-twin.component.scss']
})
export class CreateDigitalTwinComponent implements OnInit {

  treeControl = new NestedTreeControl<MachineNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MachineNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: MachineNode) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
  }

}
