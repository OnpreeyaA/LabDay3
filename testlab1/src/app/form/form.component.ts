import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { User } from '../user';
import { Agent } from 'https';
import { from } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
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
      firstname: ['',[Validators.required]],
      lastname: [''],
      email:[''],
      age:[]
    } )
  }

  EmilValidatior(control: AbstractControl){
    const value: string = control.value;
    if (value && value.includes('@')){
      return {
        email: true
      }
    }
  }
  onSubmit(form: FormGroup){
    console.log(form.valid, form.invalid);
    console.log((<FormControl>form.get('firstname')).errors);
    const {firstname, lastname, email, age} = form.value;
    const user = new User(firstname, lastname, email, age);
    console.log(user);

    if(form.valid){
    }else{
      [
      'firstname',
      'lastname',
      'email',
      'age'
      ].forEach((Key: string) =>{
        console.log(form.get(Key).touched);
        form.get(Key).markAsTouched();
      } )
    }
  }
}