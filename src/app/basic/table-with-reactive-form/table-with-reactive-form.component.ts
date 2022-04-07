import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-with-reactive-form',
  templateUrl: './table-with-reactive-form.component.html',
  styleUrls: ['./table-with-reactive-form.component.scss']
})
export class TableWithReactiveFormComponent implements OnInit {
  public partnersForm: FormGroup;
  public patientRestrationForm: FormGroup;
  public editing: false;
  subscriptions;
  partnersDataList;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  createForm() {
    this.partnersForm = this.fb.group({
      partners: this.fb.array(this.partnersDataList)
    });

    this.subscriptions.push(this.partnersForm.valueChanges.subscribe(() => this.onValueChange()));
    this.onValueChange();
  }

  onValueChange() {
    // Listen for values in form fields, NO need to use change or blur events in controls
    // with --> this.partnersForm.value
  }
}
