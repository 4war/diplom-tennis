import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentAddFormComponent } from './tournament-add-form.component';

describe('TournamentAddFormComponent', () => {
  let component: TournamentAddFormComponent;
  let fixture: ComponentFixture<TournamentAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
