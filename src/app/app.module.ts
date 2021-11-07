import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {HomeComponent} from './home-page/home.component';
import {SubsystemComponent} from './subsystem/subsystem.component';
import {ConstantComponent} from './constant/constant.component';
import {ConstantsService} from './constants-service/constants.service';

import {FireLogComponent} from './fire-log/fireLog.component';
import {FireLogService} from './fire-log-service/fire-log.service';
import {NgApexchartsModule} from 'ng-apexcharts';

const routes: Routes = [
  {path: '', component: FireLogComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubsystemComponent,
    ConstantComponent,
    FireLogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    NgApexchartsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ConstantsService, FireLogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
