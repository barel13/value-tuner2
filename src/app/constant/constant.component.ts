import {Component, Input} from '@angular/core';
import {BaseConstant, Constant} from '../models/BaseConstant';
import {ConstantsService} from '../constants-service/constants.service';
import {evaluate} from 'mathjs';

export interface Range {
  min: number;
  max: number;
}

@Component({
  selector: 'app-constant',
  templateUrl: './constant.component.html',
  styleUrls: ['./constant.component.scss']
})
export class ConstantComponent {
  @Input() constant: Constant;
  @Input() name: string;
  @Input() withArrows = true;
  @Input() withMargin = true;
  public clicked = false;
  public hovered = false;
  public valueString: string;
  public range: Range = {
    min: 0,
    max: 100
  };

  constructor(private constantService: ConstantsService) {
  }

  updateChevron(): void {
    this.clicked = !this.clicked;
    if (this.clicked) {
      document.getElementById('chevron-' + this.constant.fullKey).style.transform = 'rotate(90deg)';
    } else {
      document.getElementById('chevron-' + this.constant.fullKey).style.transform = 'rotate(0deg)';
    }
  }

  updateValue(): void {
    this.constant.defaultValue = this.constant.value;
    this.constantService.update(this.constant as BaseConstant);
  }

  valueChanged(): void {
    if (this.valueString != null && this.valueString.length > 0) {
      try {
        this.constant.value = evaluate(this.valueString);
      } catch (err) {
      }
    }
  }
}
