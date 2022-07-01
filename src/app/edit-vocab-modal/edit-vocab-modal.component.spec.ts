import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVocabModalComponent } from './edit-vocab-modal.component';

describe('EditVocabModalComponent', () => {
  let component: EditVocabModalComponent;
  let fixture: ComponentFixture<EditVocabModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVocabModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVocabModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
