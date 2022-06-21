import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEcoleComponent } from './dialog-ecole.component';

describe('DialogEcoleComponent', () => {
  let component: DialogEcoleComponent;
  let fixture: ComponentFixture<DialogEcoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEcoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
