import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithReactiveFormComponent } from './table-with-reactive-form.component';

describe('TableWithReactiveFormComponent', () => {
  let component: TableWithReactiveFormComponent;
  let fixture: ComponentFixture<TableWithReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableWithReactiveFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
