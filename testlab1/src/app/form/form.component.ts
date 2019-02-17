import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  formGroup: FormGroup;

  constructor(
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formGroup = this.formbuilder.group({
      firstname: this.formbuilder.control(''),
      lastname:['']
    })
  }
  onSubmit(form : FormGroup){
    console.log(form);
  }
}
