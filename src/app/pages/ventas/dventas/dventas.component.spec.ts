import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DVentasComponent } from './dventas.component';

describe('DVentasComponent', () => {
  let component: DVentasComponent;
  let fixture: ComponentFixture<DVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DVentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
