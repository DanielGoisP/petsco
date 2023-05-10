import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfildousarioComponent } from './perfildousario.component';

describe('PefildousarioComponent', () => {
  let component: PerfildousarioComponent;
  let fixture: ComponentFixture<PerfildousarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfildousarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfildousarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
