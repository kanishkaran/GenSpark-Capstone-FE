import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaTypesList } from './media-types-list';

describe('MediaTypesList', () => {
  let component: MediaTypesList;
  let fixture: ComponentFixture<MediaTypesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaTypesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaTypesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
