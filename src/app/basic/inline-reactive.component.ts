import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';

@Component({
  selector: 'inline-reactive-edit-demo',
  templateUrl: 'inline-reactive.component.html',
  styleUrls: [],
})
export class InlineReactiveEditComponent {
  // 1. Add FormGroup
  public reactiveFormGroup: FormGroup;
  // 2. Add FormGroup Html

  get reactiveRows(): FormArray {
    return this.reactiveFormGroup.get('reactiveFormRows') as FormArray;
  }

  editing = {};
  rows = [];

  ColumnMode = ColumnMode;

  constructor(private fb: FormBuilder) {
    this.reactiveFormGroup = this.fb.group({
      reactiveFormRows: this.fb.array([]),
    });

    const reactiveRowsArray = this.reactiveFormGroup.get(
      'reactiveFormRows'
    ) as FormArray;
    console.log('1', reactiveRowsArray);

    this.fetch(data => {
      this.rows = data;
      this.rows.map(item => {
        reactiveRowsArray.push(this.buildItemsForm(item));
      });
    });

    console.log('2', reactiveRowsArray);
  }

  buildItemsForm(item): FormGroup {
    return this.fb.group({
      name: [item.name],
      gender: [item.gender],
      age: [item.age, [Validators.required]],
      dataNascimento: ['', [Validators.required]],
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  updateValue(event, cell, rowIndex, value) {
    console.log('inline editing rowIndex', rowIndex);
    console.log('inline editing value', value);
    console.log('inline editing event', event);
    console.log('inline editing cell', cell);
    console.log('inline editing editing', this.editing);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }
}
