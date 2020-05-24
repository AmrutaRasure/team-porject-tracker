import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSkillsMenuComponent } from './left-skills-menu.component';

describe('LeftSkillsMenuComponent', () => {
  let component: LeftSkillsMenuComponent;
  let fixture: ComponentFixture<LeftSkillsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSkillsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSkillsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
