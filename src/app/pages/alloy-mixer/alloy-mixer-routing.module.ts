import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlloyMixerComponent } from './alloy-mixer.component';

const routes: Routes = [{ path: '', component: AlloyMixerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlloyMixerRoutingModule { }
