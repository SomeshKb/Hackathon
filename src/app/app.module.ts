import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './exporter/material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CreateDigitalTwinComponent } from './component/create-digital-twin/create-digital-twin.component';
import { HomeComponent } from './component/home/home.component';
import { SceneService } from './services/scene.service';
import { MachineSelectionComponent } from './component/machine-selection/machine-selection.component';
import { DigitalTwinComponent } from './component/digital-twin/digital-twin.component';
import { DigitalTwinOverviewComponent } from './component/digital-twin-overview/digital-twin-overview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PredictComponent } from './component/predict/predict.component';
import { OverviewComponent } from './component/overview/overview.component';
import { ModelBarChartComponent } from './component/model-bar-chart/model-bar-chart.component';
import { TwinSettingComponent } from './component/twin-setting/twin-setting.component';
import { MessageComponent } from './component/message/message.component';
import { ServiceComponent } from './component/service/service.component';
import { LoaderInterceptor } from './services/loader-interceptor.service';
import { LoaderComponent } from './component/loader/loader.component';
import { AlertComponent } from './component/alert/alert.component';
import { AboutComponent } from './about/about.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SimulatePredictComponent } from './simulate-predict/simulate-predict.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDigitalTwinComponent,
    HomeComponent,
    MachineSelectionComponent,
    DigitalTwinComponent,
    DigitalTwinOverviewComponent,
    PredictComponent,
    OverviewComponent,
    ModelBarChartComponent,
    TwinSettingComponent,
    MessageComponent,
    ServiceComponent,
    LoaderComponent,
    AlertComponent,
    AboutComponent,
    SimulatePredictComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgApexchartsModule
  ],
  providers: [SceneService, {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
