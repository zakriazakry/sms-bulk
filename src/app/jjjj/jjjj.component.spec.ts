import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JjjjComponent } from './jjjj.component';

describe('JjjjComponent', () => {
  let component: JjjjComponent;
  let fixture: ComponentFixture<JjjjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JjjjComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JjjjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
