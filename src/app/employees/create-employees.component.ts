import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {

  employee = new Employee();
  departments: Department[] = [
    {id:1,name:'Help Desk'},
    {id:2,name:'HR'},
    {id:3,name:'IT'},
    {id:4,name:'Payroll'}
  ];
  datePickerConfig: Partial<BsDatepickerConfig> ;
  previewPhoto = false;

  constructor() { 
    this.employee.gender = 'male';
    this.employee.contactPreference = 'email';
    this.employee.isActive = true;
    this.employee.department = '3';
    this.employee.dateOfBirth = new Date();
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        minDate: new Date(2021,0,1),
        maxDate: new Date(2021,11,31),
        dateInputFormat: 'DD/MM/YYYY'
      });
  }

  ngOnInit(): void {
    
  }
  saveEmployee(empForm: NgForm): void{
    console.log( empForm.value);
    console.log( empForm);
  }
  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }
}
