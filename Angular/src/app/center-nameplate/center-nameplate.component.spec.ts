import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterNameplateComponent } from './center-nameplate.component';

describe('CenterNameplateComponent', () => {
  let component: CenterNameplateComponent;
  let fixture: ComponentFixture<CenterNameplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterNameplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterNameplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
