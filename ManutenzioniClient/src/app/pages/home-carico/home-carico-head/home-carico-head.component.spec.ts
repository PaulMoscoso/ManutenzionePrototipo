import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCaricoHeadComponent } from './home-carico-head.component';

describe('HomeCaricoHeadComponent', () => {
  let component: HomeCaricoHeadComponent;
  let fixture: ComponentFixture<HomeCaricoHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCaricoHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCaricoHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
