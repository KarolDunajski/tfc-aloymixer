
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { NzDemoSliderInputNumberComponent } from './app.component';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  imports:      [
                  BrowserModule,FormsModule,
                  ReactiveFormsModule,
                  BrowserAnimationsModule,
                ],
  declarations: [ NzDemoSliderInputNumberComponent ],
  bootstrap:    [ NzDemoSliderInputNumberComponent ],
  providers   : [ { provide: NZ_ICONS, useValue: icons } ]
})
export class AppModule { }