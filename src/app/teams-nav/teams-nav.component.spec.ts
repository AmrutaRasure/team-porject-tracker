import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsNavComponent } from './teams-nav.component';

describe('TeamsNavComponent', () => {
  let component: TeamsNavComponent;
  let fixture: ComponentFixture<TeamsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
