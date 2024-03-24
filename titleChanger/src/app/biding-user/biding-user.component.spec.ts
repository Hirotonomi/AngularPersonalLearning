import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidingUserComponent } from './biding-user.component';

describe('BidingUserComponent', () => {
  let component: BidingUserComponent;
  let fixture: ComponentFixture<BidingUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidingUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BidingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
