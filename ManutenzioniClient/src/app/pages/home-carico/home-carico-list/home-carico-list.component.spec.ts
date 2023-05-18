import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCaricoListComponent } from './home-carico-list.component';

describe('HomeCaricoListComponent', () => {
  let component: HomeCaricoListComponent;
  let fixture: ComponentFixture<HomeCaricoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCaricoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCaricoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
