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
import { SceneService } from './service/scene.service';
import { MachineSelectionComponent } from './component/machine-selection/machine-selection.component';
import { DigitalTwinComponent } from './component/digital-twin/digital-twin.component';
import { DigitalTwinOverviewComponent } from './component/digital-twin-overview/digital-twin-overview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateDigitalTwinComponent,
    HomeComponent,
    MachineSelectionComponent,
    DigitalTwinComponent,
    DigitalTwinOverviewComponent
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
    ReactiveFormsModule
  ],
  providers: [SceneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
