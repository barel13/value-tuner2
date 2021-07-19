import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ConstantsService} from '../constants-service/constants.service';
import {BaseConstant, Constant} from '../models/BaseConstant';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.scss']
})
export class FullScreenComponent implements OnInit {
  public constants: Set<Constant>;
  public subsystem: string;

  constructor(private route: ActivatedRoute,
              private constantsService: ConstantsService) {
  }

  ngOnInit(): void {
    this.subsystem = this.route.snapshot.paramMap.get('subsystem');
    this.constants = this.constantsService.constants.get(this.subsystem);
  }

  updateAll(): void {
    this.constants.forEach((constant) => {
      if (constant.value !== constant.defaultValue) {
        constant.defaultValue = constant.value;
        this.constantsService.update(constant as BaseConstant);
      }
    });
  }

}
