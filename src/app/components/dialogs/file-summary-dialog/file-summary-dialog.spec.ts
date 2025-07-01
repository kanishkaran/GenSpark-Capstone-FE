import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSummaryDialog } from './file-summary-dialog';

describe('FileSummaryDialog', () => {
  let component: FileSummaryDialog;
  let fixture: ComponentFixture<FileSummaryDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileSummaryDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileSummaryDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
