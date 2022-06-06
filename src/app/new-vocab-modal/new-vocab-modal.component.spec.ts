import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVocabModalComponent } from './new-vocab-modal.component';

describe('NewVocabModalComponent', () => {
  let component: NewVocabModalComponent;
  let fixture: ComponentFixture<NewVocabModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewVocabModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVocabModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
