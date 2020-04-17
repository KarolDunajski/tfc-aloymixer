import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlloyMixerRoutingModule } from './alloy-mixer-routing.module';
import { AlloyMixerComponent } from './alloy-mixer.component';
import { SlotComponent } from './components/slot/slot.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzGridModule } from 'ng-zorro-antd/grid';
@NgModule({
  declarations: [AlloyMixerComponent, SlotComponent],
  imports: [
    CommonModule,
    AlloyMixerRoutingModule,
    NzSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NzSliderModule,
    NzGridModule
  ]
})
export class AlloyMixerModule { }
