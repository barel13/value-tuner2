import {Component, OnDestroy, OnInit} from '@angular/core';
import {ConstantsService} from '../constants-service/constants.service';
import {BaseConstant} from '../models/BaseConstant';
import party from 'party-js';

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
    this.createTable();
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

  public spreadParticles(): void {
    party.sparkles(document.querySelector('button'));
  }

  public createTable(): void {

    const row = document.getElementById('my-row');
    this.constantsService.constants.forEach(subsystem => {
      const mySubsytem = document.createElement('div');
      mySubsytem.className = 'col shit';
      const mySubsystemBox = document.createElement('div');
      mySubsytem.style.padding = '0px';
      row.appendChild(mySubsytem);
      mySubsystemBox.style.background = '#009cbd';
      mySubsystemBox.style.color = '#171717';
      mySubsystemBox.style.border = '1px solid darkgray';
      mySubsystemBox.style.fontSize = '30px';
      mySubsystemBox.style.height = '100px';
      mySubsystemBox.style.textAlign = 'center';
      mySubsystemBox.style.display = 'flex';
      mySubsystemBox.style.alignItems = 'center';
      mySubsystemBox.style.justifyContent = 'center';
      mySubsystemBox.style.fontWeight = 'bolder';
      mySubsytem.appendChild(mySubsystemBox);
      subsystem.forEach(constant => {
        mySubsystemBox.innerText = constant.fullKey.substring(0, constant.fullKey.indexOf('/'));
      });
      subsystem.forEach(constant => {

        const myConstant = document.createElement('div');
        myConstant.style.background = '#222222';
        myConstant.style.color = '#171717';
        myConstant.style.border = '1px solid #9b9b9b';
        myConstant.style.height = '100px';
        myConstant.style.fontSize = '30px';
        myConstant.style.display = 'flex';
        myConstant.style.alignItems = 'center';
        myConstant.style.justifyContent = 'center';
        const formGroup = document.createElement('div');
        formGroup.className = 'form__group field';
        myConstant.appendChild(formGroup);
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form__field';
        input.placeholder = 'Name';
        input.name = constant.key.keyName + mySubsystemBox.innerText;
        input.id = constant.key.keyName + mySubsystemBox.innerText;
        input.value = constant.defaultValue + '';
        input.onabort = () => {

        };
        formGroup.appendChild(input);
        const label = document.createElement('label');
        label.htmlFor = constant.key.keyName + mySubsystemBox.innerText;
        label.className = 'form__label';
        label.innerHTML = constant.key.keyName;
        formGroup.appendChild(label);
        mySubsytem.appendChild(myConstant);
      });
    });
  }
}
