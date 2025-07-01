import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessDialog } from './access-dialog';

describe('AccessDialog', () => {
  let component: AccessDialog;
  let fixture: ComponentFixture<AccessDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
