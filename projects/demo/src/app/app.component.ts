import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { QueryBuilderClassNames, QueryBuilderConfig } from 'projects/ngx-angular-query-builder/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public queryCtrl: UntypedFormControl;

  public bootstrapClassNames: QueryBuilderClassNames = {
    removeIcon: 'fa fa-minus',
    addIcon: 'fa fa-plus',
    arrowIcon: 'fa fa-chevron-right px-2',
    button: 'btn',
    buttonGroup: 'btn-group',
    rightAlign: 'order-12 ml-auto',
    switchRow: 'd-flex px-2',
    switchGroup: 'd-flex align-items-center',
    switchRadio: 'custom-control-input',
    switchLabel: 'custom-control-label',
    switchControl: 'custom-control custom-radio custom-control-inline',
    row: 'row p-2 m-1',
    invalidRuleSet: 'alert alert-danger',
    emptyWarning: 'text-danger mx-auto',
    operatorControl: 'form-control',
    operatorControlSize: 'col-auto pr-0',
    fieldControl: 'form-control',
    fieldControlSize: 'col-auto pr-0',
    entityControl: 'form-control',
    entityControlSize: 'col-auto pr-0',
    inputControl: 'form-control',
    inputControlSize: 'col-auto',
  };

  public query = {
    condition: 'JA',
    rules: [
      {
        field: 'objekt',
        value: 1,
      },
      {
        field: 'KSM',
      },
    ],
  };

  public config: QueryBuilderConfig = {
    fields: {
      age: {
        name: 'Age',
        type: 'number',
      },
      objekt: {
        name: 'Objekt',
        type: 'category',
        options: [
          {
            name: 'Põld',
            value: 1,
          },
          {
            name: 'Niit',
            value: 2,
          },
        ],
      },
      KSM: {
        name: 'kas taotleb KSM',
        type: 'boolean',
      },
      gender: {
        name: 'Gender',
        type: 'category',
        options: [
          {
            name: 'Male',
            value: 'm',
          },
          {
            name: 'Female',
            value: 'f',
          },
        ],
      },
      name: {
        name: 'Name',
        type: 'string',
      },
      notes: {
        name: 'Notes',
        type: 'textarea',
        operators: ['=', '!='],
      },
      educated: {
        name: 'College Degree?',
      },
      birthday: {
        name: 'Birthday',
        type: 'date',
        operators: ['=', '<=', '>'],
        defaultValue: (() => new Date()),
      },
      school: {
        name: 'School',
        type: 'string',
        nullable: true,
      },
      occupation: {
        name: 'Occupation',
        type: 'category',
        options: [
          {
            name: 'Student',
            value: 'student',
          },
          {
            name: 'Teacher',
            value: 'teacher',
          },
          {
            name: 'Unemployed',
            value: 'unemployed',
          },
          {
            name: 'Scientist',
            value: 'scientist',
          },
        ],
      },
    },
  };

  public currentConfig: QueryBuilderConfig;
  public allowRuleset: boolean = true;
  public allowCollapse!: boolean;
  public persistValueOnFieldChange: boolean = false;
  appearance: MatFormFieldAppearance = 'outline';

  constructor(
      private formBuilder: UntypedFormBuilder,
  ) {
    this.queryCtrl = this.formBuilder.control(this.query);
    this.currentConfig = this.config;
  }
}
