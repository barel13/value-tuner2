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
    FullScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ConstantsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
