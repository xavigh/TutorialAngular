import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoanunciosComponent } from './listadoanuncios.component';

describe('ListadoanunciosComponent', () => {
  let component: ListadoanunciosComponent;
  let fixture: ComponentFixture<ListadoanunciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoanunciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoanunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
