import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  EmployeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.EmployeeForm = this.formBuilder.group({
      FirstName : ['', Validators.required],
      LastName : ['', Validators.required],
      Gender : ['', Validators.required],
      FatherName : ['', Validators.required],
      DateOfBirth : ['', Validators.required],
      MaritalStatus : ['', Validators.required],
      ContactNo : ['', Validators.required],
      Email : ['', Validators.required],
      Photo : ['', Validators.required],
      MedicalExam : ['', Validators.required],
      CompanyName : ['', Validators.required],
      DesignationName : ['', Validators.required],
      ReportTo : ['', Validators.required],
      CurrentAddress : ['', Validators.required],
      State : ['', Validators.required],
      City : ['', Validators.required],
      PermanentAddress : ['', Validators.required],
      AdhaarNo : ['', Validators.required],
      AlternateContactNo : ['', Validators.required],
      MotherName : ['', Validators.required],
      BloodGroup : ['', Validators.required],
      DOJ : ['', Validators.required],
      ReferenceBy : ['', Validators.required],
      ReferenceContact1 : ['', Validators.required],
      ReferenceContact2 : ['', Validators.required],
      PreviousCompany : ['', Validators.required],
      JobType : ['', Validators.required],

      
    })
  }

}
