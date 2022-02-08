import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTournamentComponent } from './section-tournament.component';

describe('SectionTournamentComponent', () => {
  let component: SectionTournamentComponent;
  let fixture: ComponentFixture<SectionTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTournamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
