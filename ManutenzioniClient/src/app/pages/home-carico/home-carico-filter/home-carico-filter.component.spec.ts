import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCaricoFilterComponent } from './home-carico-filter.component';

describe('HomeCaricoFilterComponent', () => {
  let component: HomeCaricoFilterComponent;
  let fixture: ComponentFixture<HomeCaricoFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCaricoFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCaricoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
