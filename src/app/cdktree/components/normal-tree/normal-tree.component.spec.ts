import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalTreeComponent } from './normal-tree.component';

describe('NormalTreeComponent', () => {
  let component: NormalTreeComponent;
  let fixture: ComponentFixture<NormalTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
