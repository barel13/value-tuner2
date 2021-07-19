import {Component, Input, OnInit} from '@angular/core';
import {BaseConstant} from '../models/BaseConstant';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-subsystem',
  templateUrl: './subsystem.component.html',
  styleUrls: ['./subsystem.component.scss']
})
export class SubsystemComponent implements OnInit {
  constantsArray: BaseConstant[];
  @Input() constants: Set<BaseConstant>;

  moveConstant(event: CdkDragDrop<BaseConstant[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  ngOnInit(): void {
    this.constantsArray = Array.from(this.constants)
      .sort((a, b) => {
        if (a.key.keyName.toLowerCase().includes('kp') &&
          !b.key.keyName.toLowerCase().includes('kp')) {
          return -1;
        }
        if (a.key.keyName.toLowerCase().includes('ki') &&
          !(b.key.keyName.toLowerCase().includes('kp') ||
            b.key.keyName.toLowerCase().includes('ki'))) {
          return -1;
        }
        if (a.key.keyName.toLowerCase().includes('kd') &&
          !(b.key.keyName.toLowerCase().includes('kp') ||
            b.key.keyName.toLowerCase().includes('ki') ||
            b.key.keyName.toLowerCase().includes('kd'))) {
          return -1;
        }
        if (a.key.keyName.toLowerCase().includes('kf') &&
          !(b.key.keyName.toLowerCase().includes('kp') ||
            b.key.keyName.toLowerCase().includes('ki') ||
            b.key.keyName.toLowerCase().includes('kd') ||
            b.key.keyName.toLowerCase().includes('kf'))) {
          return -1;
        }
        return 0;
      });
  }
}
