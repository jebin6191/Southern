import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CountryService } from '../../../../services/administrator/location/country.service';
import { CountryEntity } from '../../../../models/location/country.model';
import { StateService } from '../../../../services/administrator/location/state.serivce';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  IsCreate: boolean = false;
  IsEdit: boolean = false;
  CreateStateForm: FormGroup;
  CountryList : any =[];

  constructor(private _countryService: CountryService, private _stateService: StateService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.IsCreate = false;
    this.IsEdit = false;
  
      this.CreateStateForm = this.formBuilder.group({
        StateId: [''],
        CountryId:['', Validators.required],
        CountryName: ['', Validators.required]
    })
    this.GetAll();
  }

    OnEdit(row){      
      this.IsEdit = true;
      this.CreateStateForm.setValue({
        CountryId : row.CountryId,
        CountryName : row.CountryName
      })
    }

    GetAll(){      
      this._countryService.listCountryDetails().subscribe((res: any) => {
          if (res) {
            this.CountryList = res;
          }
        });
    }

    OnCreateNewStateBtnClick(){
      this.IsCreate = true;
      this.IsEdit = false;
    }

    OnCreate(){
       const country = new CountryEntity();
       country.CountryName = this.CreateStateForm.value.CountryName;
      this._countryService.saveCountryDetail(country).subscribe((res: any) => {
        if (res) {
          alert("Successfully Updated")
          this.ngOnInit();
        }
      });
    }

    OnUpdateBtnClick(){
      debugger;
      const country = new CountryEntity();
      country.CountryName = this.CreateStateForm.value.CountryName;
      country.CountryId = this.CreateStateForm.value.CountryId;
      this._countryService.updateCountryDetail(country).subscribe((res: any) => {
        if (res) {
          alert("Successfully Updated")
          this.ngOnInit();
        }
      });
    }
    
    OnDelete(row){
      debugger;
      this._countryService.deleteCountryDetail(row.CountryId).subscribe((data: any) => {
        if(data){
          alert("Deleted Successfully")
          this.ngOnInit();
        }
      })
    }

  OnCancelBtnClick(){
    this.IsCreate = false;
    this.IsEdit = false;
  }

}
