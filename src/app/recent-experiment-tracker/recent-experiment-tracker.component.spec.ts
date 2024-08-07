import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentExperimentTrackerComponent } from './recent-experiment-tracker.component';

describe('RecentExperimentTrackerComponent', () => {
  let component: RecentExperimentTrackerComponent;
  let fixture: ComponentFixture<RecentExperimentTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentExperimentTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentExperimentTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
