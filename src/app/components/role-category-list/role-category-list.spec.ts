import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleCategoryList } from './role-category-list';

describe('RoleCategoryList', () => {
  let component: RoleCategoryList;
  let fixture: ComponentFixture<RoleCategoryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleCategoryList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleCategoryList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
