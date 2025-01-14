import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPipesComponent } from './component-pipes.component';

describe('ComponentPipesComponent', () => {
  let component: ComponentPipesComponent;
  let fixture: ComponentFixture<ComponentPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
