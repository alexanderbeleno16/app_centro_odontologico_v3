import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFormContactComponent } from './section-form-contact.component';

describe('SectionFormContactComponent', () => {
  let component: SectionFormContactComponent;
  let fixture: ComponentFixture<SectionFormContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFormContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFormContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
