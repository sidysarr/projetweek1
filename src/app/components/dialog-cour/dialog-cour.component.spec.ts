import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCourComponent } from './dialog-cour.component';

describe('DialogCourComponent', () => {
  let component: DialogCourComponent;
  let fixture: ComponentFixture<DialogCourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
