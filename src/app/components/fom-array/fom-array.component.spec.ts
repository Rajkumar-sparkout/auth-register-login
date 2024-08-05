import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomArrayComponent } from './fom-array.component';

describe('FomArrayComponent', () => {
  let component: FomArrayComponent;
  let fixture: ComponentFixture<FomArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FomArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FomArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
