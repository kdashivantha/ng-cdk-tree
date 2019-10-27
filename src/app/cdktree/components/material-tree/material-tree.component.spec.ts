import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTreeComponent } from './material-tree.component';

describe('MaterialTreeComponent', () => {
  let component: MaterialTreeComponent;
  let fixture: ComponentFixture<MaterialTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
