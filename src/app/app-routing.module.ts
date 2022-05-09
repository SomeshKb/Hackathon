import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CreateDigitalTwinComponent } from './component/create-digital-twin/create-digital-twin.component';
import { DigitalTwinOverviewComponent } from './component/digital-twin-overview/digital-twin-overview.component';
import { DigitalTwinComponent } from './component/digital-twin/digital-twin.component';
import { HomeComponent } from './component/home/home.component';
import { MachineSelectionComponent } from './component/machine-selection/machine-selection.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "create", component: MachineSelectionComponent },
  { path: "about", component: AboutComponent },
  { path: "create/:id", component: CreateDigitalTwinComponent },
  { path: "digital-twin", component: DigitalTwinComponent },
  { path: "digital-twin/:id", component: DigitalTwinOverviewComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
