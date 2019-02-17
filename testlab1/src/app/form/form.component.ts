import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form101',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private formBuild: FormBuilder
  ) 
  {

   }

  ngOnInit() {
    this.formGroup = this.formBuild.group({
      firstName: this.formBuild.control(''),
      lastName: [''],
      email:['']
    } )
  }
  onSubmit(form: FormGroup){
    const {firstName, lastName, email} = form.value;
    const user1 = new User(firstName, lastName, email);
    console.log(user1);
  }

}