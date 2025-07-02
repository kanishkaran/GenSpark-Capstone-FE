import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileVersionDialog } from './file-version-dialog';

describe('FileVersionDialog', () => {
  let component: FileVersionDialog;
  let fixture: ComponentFixture<FileVersionDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileVersionDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileVersionDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
