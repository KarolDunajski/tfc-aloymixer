import { Component, OnInit, OnDestroy, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { chain } from 'lodash';

enum OreUnitEnum {
  Small = 10,
  Poor = 15,
  Normal = 25,
  Rich = 35,
}

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SlotComponent),
      multi: true,
    },
  ],
})
export class SlotComponent implements ControlValueAccessor, OnInit, OnDestroy {
  destroyNotifier = new Subject();

  onChange: any = () => {};
  onTouch: any = () => {};
  val: number;

  options: { name: string; value: number }[] = chain(OreUnitEnum)
    .keys()
    .filter((key) => isNaN(key as any))
    .map((key) => {
      return { name: key, value: OreUnitEnum[key] };
    })
    .value();

  oreSizeCtrl = new FormControl(null);
  oreCountCtrl = new FormControl(null);

  ngOnInit(): void {
    combineLatest([
      this.oreSizeCtrl.valueChanges,
      this.oreCountCtrl.valueChanges,
    ])
      .pipe(
        takeUntil(this.destroyNotifier),
        map(([size, count]) => size * count)
      )
      .subscribe((units) => {
        this.writeValue(units);
      });
  }

  ngOnDestroy(): void {
    this.destroyNotifier.next();
    this.destroyNotifier.complete();
  }

  set value(val) {
    if (val !== undefined && this.val !== val) {
      this.val = val;
      this.onChange(val);
      this.onTouch(val);
    }
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}
}
