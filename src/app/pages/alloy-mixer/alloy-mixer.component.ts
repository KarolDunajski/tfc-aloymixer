import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import * as _ from 'lodash';

const ORES = [
  'Bismuth',
  'Tin',
  'Zinc',
  'Copper',
  'Lead',
  'Gold',
  'Silver',
  'Platinum',
  'Wrought Iron',
  'Nickel',
  'Pig Iron',
  'Steel',
];

@Component({
  selector: 'app-alloy-mixer',
  templateUrl: './alloy-mixer.component.html',
  styleUrls: ['./alloy-mixer.component.scss'],
})
export class AlloyMixerComponent implements OnInit {
  formGroup: FormGroup;
  ores = ORES;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      vessel: this.fb.array([
        this.slotCreate(),
        this.slotCreate(),
        this.slotCreate(),
        this.slotCreate(),
      ]),
    });
  }

  get vessel(): FormArray {
    return this.formGroup.get('vessel') as FormArray;
  }

  slotCreate(): FormGroup {
    return this.fb.group({
      ore: [null],
      unit: [null],
    });
  }

  get summary(): { [oreName: string]: number } {
    const slotsWithOre: {
      ore: string;
      unit: number;
    }[] = this.vessel.controls
      .map((ctrl) => ctrl.value)
      .filter((slotValue) => slotValue.ore && slotValue.unit);

    const unitPerOre = _(slotsWithOre)
      .groupBy('ore')
      .mapValues((oreUnitArray) => _.sumBy(oreUnitArray, 'unit'));
    const allUnit = unitPerOre.values().sum();
    return unitPerOre.mapValues((unit) => _.round(unit / allUnit, 2) * 100).value();
  }
}
