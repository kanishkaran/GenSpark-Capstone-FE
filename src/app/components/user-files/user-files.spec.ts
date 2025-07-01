import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFiles } from './user-files';

describe('UserFiles', () => {
  let component: UserFiles;
  let fixture: ComponentFixture<UserFiles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFiles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFiles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
