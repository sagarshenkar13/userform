import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetuserindexComponent } from './getuserindex.component';

describe('GetuserindexComponent', () => {
  let component: GetuserindexComponent;
  let fixture: ComponentFixture<GetuserindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetuserindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetuserindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
