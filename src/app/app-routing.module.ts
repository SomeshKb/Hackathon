import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDigitalTwinComponent } from './component/create-digital-twin/create-digital-twin.component';
import { HomeComponent } from './component/home/home.component';
import { MachineSelectionComponent } from './component/machine-selection/machine-selection.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "create", component: MachineSelectionComponent },
  { path: "create/:id", component: CreateDigitalTwinComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
