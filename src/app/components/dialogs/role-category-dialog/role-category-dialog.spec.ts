import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleCategoryDialog } from './role-category-dialog';

describe('RoleCategoryDialog', () => {
  let component: RoleCategoryDialog;
  let fixture: ComponentFixture<RoleCategoryDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleCategoryDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleCategoryDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
