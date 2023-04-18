import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistlistComponent } from './tasklistlist.component';

describe('TasklistlistComponent', () => {
  let component: TasklistlistComponent;
  let fixture: ComponentFixture<TasklistlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasklistlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasklistlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
