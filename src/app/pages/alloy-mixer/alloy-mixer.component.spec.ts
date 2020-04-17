import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlloyMixerComponent } from './alloy-mixer.component';

describe('AlloyMixerComponent', () => {
  let component: AlloyMixerComponent;
  let fixture: ComponentFixture<AlloyMixerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlloyMixerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlloyMixerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
