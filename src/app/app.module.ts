import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home-page/home.component';
import {ConstantsService} from './constants-service/constants.service';
import {SubsystemComponent} from './subsystem/subsystem.component';
import {FormsModule} from '@angular/forms';
import {ConstantComponent} from './constant/constant.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {RouterModule, Routes} from '@angular/router';
import {FullScreenComponent} from './full-screen/full-screen.component';
import {FireLogComponent} from './fire-log/fireLog.component';
import {NgApexchartsModule} from 'ng-apexcharts';
import {FireLogService} from './fire-log-service/fire-log.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: ':subsystem', component: FullScreenComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubsystemComponent,
    ConstantComponent,
    FullScreenComponent,
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
