import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZegelComponent } from './zegel.component';

describe('ZegelComponent', () => {
  let component: ZegelComponent;
  let fixture: ComponentFixture<ZegelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZegelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZegelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
