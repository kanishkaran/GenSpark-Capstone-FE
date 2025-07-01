import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessList } from './access-list';

describe('AccessList', () => {
  let component: AccessList;
  let fixture: ComponentFixture<AccessList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
