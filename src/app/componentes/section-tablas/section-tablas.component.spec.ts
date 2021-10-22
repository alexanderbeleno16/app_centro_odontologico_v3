import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTablasComponent } from './section-tablas.component';

describe('SectionTablasComponent', () => {
  let component: SectionTablasComponent;
  let fixture: ComponentFixture<SectionTablasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTablasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTablasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
