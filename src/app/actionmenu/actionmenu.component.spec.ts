import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionmenuComponent } from './actionmenu.component';

describe('ActionmenuComponent', () => {
  let component: ActionmenuComponent;
  let fixture: ComponentFixture<ActionmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionmenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
