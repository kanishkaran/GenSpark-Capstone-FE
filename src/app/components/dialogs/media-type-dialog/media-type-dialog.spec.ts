import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaTypeDialog } from './media-type-dialog';

describe('MediaTypeDialog', () => {
  let component: MediaTypeDialog;
  let fixture: ComponentFixture<MediaTypeDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaTypeDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaTypeDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
