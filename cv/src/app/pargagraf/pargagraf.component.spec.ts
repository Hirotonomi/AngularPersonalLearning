import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PargagrafComponent } from './pargagraf.component';

describe('PargagrafComponent', () => {
  let component: PargagrafComponent;
  let fixture: ComponentFixture<PargagrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PargagrafComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PargagrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
