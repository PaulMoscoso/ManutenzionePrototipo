import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCaricoViewComponent } from './home-carico-view.component';

describe('HomeCaricoViewComponent', () => {
  let component: HomeCaricoViewComponent;
  let fixture: ComponentFixture<HomeCaricoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCaricoViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCaricoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
