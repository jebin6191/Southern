import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeMasterService } from '../../../services/master/employee.master.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  EmployeeForm: FormGroup;
  IsCreate: boolean = false;
  IsEdit: boolean = false;
  EmployeeList: any = [];
  CompanyData: any = [];
  cityData: any = [];
  stateData: any = [];
  BankData: any = [];
  BankForm: FormGroup;
  submitted = false;
  imageSrc: string;
  designationData: any =[];
  reportData:any = [];
  EmployeeId: 0;
  ShowBankDetails = false;
  bloodGroupData = [{ Name: 'A+' }, { Name: 'A-' }, { Name: 'B+' }, { Name: 'B-' }, { Name: 'O+' }, { Name: 'O-' }, { Name: 'AB+' }, { Name: 'AB-' }]

  constructor(private formBuilder: FormBuilder, private _employeeMasterService : EmployeeMasterService) { }

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
      Company : ['', Validators.required],
      Designation : ['', Validators.required],
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
      NativePlace : ['', Validators.required],
      ShowBankDetails:  [false]
    })

    this.BankForm = this.formBuilder.group({
      AccountNo : ['', Validators.required],
      BankName : ['', Validators.required],
      IFSC : ['', Validators.required],
      Branch : ['', Validators.required],
      MICR : ['', Validators.required],
      isPrimary : ['', Validators.required],
    })
    

    this.LoadEmployeeMaster();
    this.getAllCompany();
    this.getAllState();
  }

    get f() { return this.EmployeeForm.controls; }

  // BankDetails: any = {
  //   EmployeeBankId: 0,
  //   EmployeeId: '',
  //   AccountNo: '',
  //   BankName: '',
  //   IFSC: '',
  //   MICRCode: '',
  //   Branch: '',
  //   isPrimary: '',
  //   CreatedBy: sessionStorage.getItem('UserID'),
  // };

  // unchangeEmployeeDetail: any = {};

  // upadteEmployeeDetail: any = {};


  OnCancelBtnClick(){
    this.IsCreate = false;
    this.IsEdit = false;
    this.submitted = false;
  }

  readURL(event: Event): void {
    let ev = (<HTMLInputElement>event.target);
    if (ev.files && ev.files[0]) {
    var reader = new FileReader();

    reader.onload = (event:any) => {
     this.imageSrc = event.target.result;
    }
      reader.readAsDataURL(ev.files[0]);
  }
}


  LoadEmployeeMaster(): void {
    let element = {
      ActionBy: sessionStorage.getItem('UserID')
    };
    debugger
    this._employeeMasterService.getAllEmployee(element).subscribe(
      (response: any) => {
        this.EmployeeList = response.result;
      },
      error => {
        if (error.status === 401) {
          alert("Unauthorized");
        } else {
          alert("Something went wrong! Try Again");
        }
      }
    );
  }

  getAllCompany(): void {
    let element = {
      ActionBy: sessionStorage.getItem('UserID')
    };
    this._employeeMasterService.getCompany(element).subscribe(
      (result: any) => {
        this.CompanyData = result;
      },
      error => {
        if (error.status === 401) {
          alert("Unauthorized");
        } else {
          alert("Something went wrong! Try Again");
        }
      }
    );
  }

    getAllState(): void {
      debugger;
      this.cityData = [];
      let element = {
        ActionBy: sessionStorage.getItem('UserID')
      };
      this._employeeMasterService.getState(element).subscribe(
        (result: any) => {
          debugger;
          this.stateData = result;
        },
        error => {
          if (error.status === 401) {
            alert("Unauthorized");
          } else {
            alert("Something went wrong! Try Again");
          }
        }
      );
    }

    getAllCity(val): void {
      console.log(val, "val");
      let stateId = parseInt(val.target.value);
      this._employeeMasterService.getCity(stateId).subscribe(
        (result: any) => {
          this.cityData = result;
        },
        error => {
          if (error.status === 401) {
            alert("Unauthorized");
          } else {
            alert("Something went wrong! Try Again");
          }
        }
      );
    }

  getDesignation(val): void {
    let CompanyId =  parseInt(val.target.value);
    this._employeeMasterService.getDesignationById(CompanyId).subscribe(
      (result: any) => {
        this.designationData = result;
      },
      error => {
        if (error.status === 401) {
          alert("Unauthorized");
        } else {
          alert("Something went wrong! Try Again");
        }
      }
    );
  }

  getReportTo(): void {
    debugger;
    let element = {
      EmployeeId:  this.EmployeeId,
      ActionBy: sessionStorage.getItem('UserID')
    }
    this._employeeMasterService.getReport(element).subscribe(
      (response: any) => {
        debugger;
        this.reportData = response.result;
        console.log(response.result,"response.result")
      },
      error => {
        if (error.status === 401) { alert("Unauthorized"); }
        else { alert("Something went wrong! Try Again"); }
      }
    );
  }

  OnCreateNewEmployeeBtnClick(){
    this.IsCreate = true;
    this.submitted = false;
  }


  // getBankDetail(param): void {
  //   debugger;
  //   var id = Number(param);
  //   this._employeeMasterService.getBankDetail(id).subscribe(
  //     (result: any) => {
  //       this.BankData = result.result;
  //       if (this.BankData.length > 0) {
  //         this.employeeDetail.PF = 1
  //         this.showBankDetails();
  //       } else {
  //         this.employeeDetail.PF = 0;
  //       }
  //       console.log(this.BankData);
  //     },
  //     error => {
  //       if (error.status === 401) {
  //         alert("Unauthorized");
  //       } else {
  //         alert("Something went wrong! Try Again");
  //       }
  //     }
  //   );
  // }

  // addBankDetails() {
  //   var tempObj = {
  //     AccountNo: this.BankDetails.AccountNo,
  //     BankName: this.BankDetails.BankName,
  //     IFSC: this.BankDetails.IFSC,
  //     MICR: this.BankDetails.MICR,
  //     Branch: this.BankDetails.Branch,
  //     isPrimary: this.BankDetails.isPrimary,
  //     CreatedBy: Number(sessionStorage.getItem('UserID')),
  //   }
  //   if (this.isEditing) {
  //     if (this.tabIsEditing) {
  //       this.modifyBankDetailOnModify(this.tabIndex);
  //     } else {
  //       this.addBankDetailOnModify();
  //     }
  //   } else {
  //     if (this.tabIsEditing) {
  //       this.BankData[this.tabIndex] = tempObj;
  //     } else {
  //       this.BankData.push(tempObj);
  //     }
  //   }
  //   this.BankDetails = {};
  // }

  // addBankDetailOnModify() {
  //   var tempObj = {
  //     Id: this.employeeDetail.Id,
  //     AccountNo: this.BankDetails.AccountNo,
  //     BankName: this.BankDetails.BankName,
  //     IFSC: this.BankDetails.IFSC,
  //     MICR: this.BankDetails.MICR,
  //     Branch: this.BankDetails.Branch,
  //     isPrimary: this.BankDetails.isPrimary,
  //     CreatedBy: Number(sessionStorage.getItem('UserID')),
  //   }
  //   this._employeeMasterService.addBank(tempObj).subscribe(
  //     (result: any) => {
  //       if (result == true) {
  //         alert("Successfully Added");
  //         this.BankData.push(tempObj);
  //       }
  //     },
  //     error => {
  //       if (error.status === 401) { ("Unauthorized"); }
  //       else { alert("Something went wrong! Try Again"); }
  //     }
  //   );
  // }

  // modifyBankDetailOnModify(index) {
  //   var tempObj = {
  //     EmployeeBankId: this.BankDetails.EmployeeBankId,
  //     Id: this.employeeDetail.Id,
  //     AccountNo: this.BankDetails.AccountNo,
  //     BankName: this.BankDetails.BankName,
  //     IFSC: this.BankDetails.IFSC,
  //     MICR: this.BankDetails.MICR,
  //     Branch: this.BankDetails.Branch,
  //     isPrimary: this.BankDetails.isPrimary,
  //     CreatedBy: Number(sessionStorage.getItem('UserID')),
  //   }
  //   this._employeeMasterService.modifyBank(tempObj).subscribe(
  //     (result: any) => {
  //       if (result == true) {
  //         alert("Successfully Modified");
  //         this.BankData[index] = tempObj;
  //       }
  //     },
  //     error => {
  //       if (error.status === 401) { ("Unauthorized"); }
  //       else { alert("Something went wrong! Try Again"); }
  //     }
  //   );
  // }

  // editBankDetails(modifyBank, index: number): void {
  //   this.BankDetails = modifyBank;
  //   this.tabIsEditing = true;
  //   this.tabIndex = index;
  // }

  // removeEmployeeDetail(element): void {
  //   let deleteElement = {
  //     Id: element.EmployeeId,
  //     Active: true,
  //     ActionBy: sessionStorage.getItem('UserID')
  //   }
  //   this._employeeMasterService.removeEmployee(deleteElement).subscribe(
  //     (result: any) => {
  //       if (result.result == true) {
  //         alert("Remove Successfully");
  //         this.LoadEmployeeMaster();
  //       }
  //     },
  //     error => {
  //       if (error.status === 401) { ("Unauthorized"); }
  //       else { alert("Something went wrong! Try Again"); }
  //     }
  //   );
  // }

  // onNewClick() {
  //   debugger;
  //   this.viewFlag = !this.viewFlag;
  //   this.employeeDetail = {};
  //   // this.getBankDetail();
  //   this.isEditing = false;
  // }

  // resetScreen(): void {
  //   this.employeeDetail = Object.assign({}, this.unchangeEmployeeDetail);
  //   this.viewFlag = !this.viewFlag;
  //   this.show = false;

  // }

  // removeBankDetail(element): void {
  //   let deleteElement = {
  //     Id: element.Id,
  //     Active: element.Active,
  //     ActionBy: parseInt(sessionStorage.getItem('UserID'))
  //   }
  //   this._employeeMasterService.removebank(deleteElement).subscribe(
  //     (result: any) => {
  //       console.log(result);
  //     },
  //     error => {
  //       if (error.status === 401) { alert("Unauthorized"); }
  //       else { alert("Something went wrong! Try Again"); }
  //     }
  //   );
  // }


  // getCity(): void {
  //   debugger;
  //   this._manpowerDetailService.getCityMaster(this.employeeDetail.State).subscribe(
  //     (result: any) => {
  //       this.cityData = result;
  //     },
  //     error => {
  //       if (error.status === 401) {
  //         this._confirmationDialogComponent.openAlertDialog("Unauthorized", "Manpower Details");
  //       } else {
  //         this._confirmationDialogComponent.openAlertDialog("Something went wrong! Try Again", "Manpower Details");
  //       }
  //     }
  //   );
  // }





  saveEmployee(): void {
    debugger;
    console.log("EmployeeForm", this.EmployeeForm);
    console.log("BankForm",  this.BankForm);
    this.submitted = true;
    // if (this.checkValidation()) {
    // if (this.employeeDetail.PF == 1) {
    //   if (!this.isEditing) {
    //     this.employeeDetail.BankDetail = this.BankData;
    //   }
    //   this.employeeDetail.CreatedBy = Number(sessionStorage.getItem('UserID'));
    //   this.addCustomer();
    // } else {
    //   this._confirmationDialogComponent.openAlertDialog("Enter Employee Bank Details");
    // }

    // }
  }

  // checkValidation(): boolean {
  //   if (this.employeeDetail.FirstName === '') {
  //     alert("Enter FirstName Name");
  //     // ('Enter FirstName Name')
  //     return false;
  //   } else if (this.employeeDetail.SecondName === 0) {
  //     ('Select SecondName')
  //     return false;
  //   } else if (this.employeeDetail.FatherName === '') {
  //     ('Enter FatherName')
  //     return false;
  //   } else if (this.employeeDetail.Gender === 0) {
  //     ('Select Gender')
  //     return false;
  //   }
  //   else if (this.employeeDetail.DateOfBirth === '') {
  //     ('Enter DateOfBirth')
  //     return false;
  //   }
  //   else if (this.employeeDetail.ContactNo === 0) {
  //     ('Select ContactNo')
  //     return false;
  //   }

  //   else if (this.employeeDetail.Email === '') {
  //     ('Enter Email')
  //     return false;
  //   }
  //   else if (this.employeeDetail.MedicalExam === '') {
  //     ('Enter MedicalExam')
  //     return false;
  //   }
  //   else if (this.employeeDetail.CompanyName === '') {
  //     ('Enter CompanyName')
  //     return false;
  //   }
  //   // else if (this.employeeDetail.DesignationName === '') {
  //   //   ('Enter DesignationName')
  //   //   return false;
  //   // }
  //   else if (this.employeeDetail.ReportTo === '') {
  //     ('Enter ReportTo')
  //     return false;
  //   }
  //   else if (this.employeeDetail.NativePlace === 0) {
  //     ('Enter NativePlace')
  //     return false;
  //   }
  //   else if (this.employeeDetail.CurrentAddress === 0) {
  //     ('Enter CurrentAddress')
  //     return false;
  //   }
  //   else if (this.employeeDetail.PermanentAddress === 0) {
  //     ('Enter PermanentAddress')
  //     return false;
  //   }
  //   else if (this.employeeDetail.State === '') {
  //     ('Enter State')
  //     return false;
  //   }
  //   else if (this.employeeDetail.City === 0) {
  //     ('Enter City')
  //     return false;
  //   } else if (this.employeeDetail.BloodGroup === 0) {
  //     ('Enter BloodGroup')
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  // addCustomer(): void {
  //   debugger;
  //   const formData = new FormData();
  //   if (!this.isEditing) {
  //     if (this.Photo != undefined && this.Photo != '' && this.photoFlag == true) {
  //       formData.append("data", JSON.stringify(this.employeeDetail));
  //       this.photoFlag ?
  //         (formData.append("Photo", (this.Photo == "") ? "" : this.Photo)) :
  //         (formData.append("Photo", (this.Photo == "") ? "" : this.Photo));
  //       this._employeeMasterService.addEmployeeWithPhoto(formData).subscribe(
  //         (result: any) => {
  //           if (result == true) {
  //             this._confirmationDialogComponent.openAlertDialog("Successfully added");
  //             this.BankData = [];
  //             this.employeeDetail = {};
  //             this.viewFlag = !this.viewFlag;
  //           }
  //         },
  //         error => {
  //           if (error.status === 401) {
  //             this._confirmationDialogComponent.openAlertDialog("Unauthorized");
  //           } else {
  //             this._confirmationDialogComponent.openAlertDialog("Something went wrong! Try Again");
  //           }
  //         }
  //       );
  //     } else {
  //       this._employeeMasterService.addEmployee(this.employeeDetail).subscribe(
  //         (result: any) => {
  //           if (result == true) {
  //             this._confirmationDialogComponent.openAlertDialog("Successfully added");
  //             this.BankData = [];
  //             this.employeeDetail = {};
  //             this.viewFlag = !this.viewFlag;
  //           }
  //         },
  //         error => {
  //           if (error.status === 401) {
  //             this._confirmationDialogComponent.openAlertDialog("Unauthorized");
  //           } else {
  //             this._confirmationDialogComponent.openAlertDialog("Something went wrong! Try Again");
  //           }
  //         }
  //       );
  //     }
  //   } else {
  //     if (this.Photo != undefined && this.Photo != '' && this.photoFlag == true) {
  //       formData.append("data", JSON.stringify(this.employeeDetail));
  //       this.photoFlag ?
  //         (formData.append("Photo", (this.Photo == "") ? "" : this.Photo)) :
  //         (formData.append("Photo", (this.Photo == "") ? "" : this.Photo));
  //       this._employeeMasterService.modifyEmployeeWithPhoto(formData).subscribe(
  //         (result: any) => {
  //           if (result.result == true) {
  //             this._confirmationDialogComponent.openAlertDialog("Successfully modified");
  //             this.BankData = [];
  //             this.employeeDetail = {};
  //             this.viewFlag = !this.viewFlag;
  //           }
  //         },
  //         error => {
  //           if (error.status === 401) {
  //             this._confirmationDialogComponent.openAlertDialog("Unauthorized");
  //           } else {
  //             this._confirmationDialogComponent.openAlertDialog("Something went wrong! Try Again");
  //           }
  //         }
  //       );
  //     } else {
  //       this._employeeMasterService.modifyEmployee(this.employeeDetail).subscribe(
  //         (result: any) => {
  //           if (result.result == true) {
  //             this._confirmationDialogComponent.openAlertDialog("Successfully modified");
  //             this.BankData = [];
  //             this.employeeDetail = {};
  //             this.viewFlag = !this.viewFlag;
  //           }
  //         },
  //         error => {
  //           if (error.status === 401) {
  //             this._confirmationDialogComponent.openAlertDialog("Unauthorized");
  //           } else {
  //             this._confirmationDialogComponent.openAlertDialog("Something went wrong! Try Again");
  //           }
  //         }
  //       );
  //     }
  //   }
  // }

  // uploadImage(event) {
  //   const fileList = event.target.files;
  //   if (fileList && event.target.files[0]) {
  //     // const file = event.target.files[0];
  //     this.Photo = fileList[0];
  //     this.photoFlag = true;
  //     // const reader = new FileReader();
  //     // reader.onload = e => this.employeeDetail.Photo = reader.result;
  //     // reader.readAsDataURL(file);
  //   }
  // }

  // showBankDetails() {
  //   this.show = !this.show;
  //   this.BankDetails = {};
  // }
  


  // editEmployeeDetails(modifyEmployee): void {
  //   debugger;
  //   this.getBankDetail(modifyEmployee.EmployeeId);
  //   this.getAllState();
  //   this.employeeDetail = modifyEmployee;
  //   this.employeeDetail.State = Number(modifyEmployee.StateId);
  //   this.employeeDetail.City = Number(modifyEmployee.CityId);
  //   this.getCity();
  //   console.log(this.employeeDetail, 'Emp');
  //   this.designationData = [{ DesignationId: modifyEmployee.DesignationId, DesignationName: modifyEmployee.DesignationName }];
  //   this.getDesignation();
  //   this.viewFlag = !this.viewFlag;
  //   this.isEditing = true;
  // }


}
