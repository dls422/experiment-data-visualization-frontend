import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrelationTableComponent } from './correlation-table.component';

describe('CorrelationTableComponent', () => {
  let component: CorrelationTableComponent;
  let fixture: ComponentFixture<CorrelationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrelationTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrelationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
