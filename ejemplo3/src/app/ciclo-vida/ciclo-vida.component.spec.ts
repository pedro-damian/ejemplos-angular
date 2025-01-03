import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloVidaComponent } from './ciclo-vida.component';

describe('CicloVidaComponent', () => {
  let component: CicloVidaComponent;
  let fixture: ComponentFixture<CicloVidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CicloVidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CicloVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
