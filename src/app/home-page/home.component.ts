import {Component, OnDestroy, OnInit} from '@angular/core';
import {ConstantsService} from '../constants-service/constants.service';
import {BaseConstant} from '../models/BaseConstant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public constructor(public constantsService: ConstantsService) {
  }

  ngOnInit(): void {
    this.constantsService.connect();
  }

  ngOnDestroy(): void {
    this.constantsService.disconnect();
  }

  public updateAllConstants(): void {
    this.constantsService.constants.forEach((subsystem) => {
      subsystem.forEach((constant) => {
        if (constant.value !== constant.defaultValue) {
          constant.defaultValue = constant.value;
          this.constantsService.update(constant as BaseConstant);
        }
      });
    });
  }
}
