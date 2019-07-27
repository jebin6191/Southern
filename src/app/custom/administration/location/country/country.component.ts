import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CountryService } from '../../../../services/administrator/location/country.service';
import { CountryEntity } from '../../../../models/location/country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html'
})
export class CountryComponent implements OnInit {

  IsCreate: boolean = false;
  IsEdit: boolean = false;
  CreateCountryForm: FormGroup;
  CountryList : any =[];

  constructor(private _countryService: CountryService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.IsCreate = false;
    this.IsEdit = false;
  
      this.CreateCountryForm = this.formBuilder.group({
        CountryId:[''],
        CountryName: ['', Validators.required]
    })
    this.GetAll();
  }

    OnEdit(row){
      
      this.IsEdit = true;
      this.CreateCountryForm.setValue({
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

    OnCreateNewCountryBtnClick(){
      this.IsCreate = true;
    }

    OnCreate(){
       const country = new CountryEntity();
       country.CountryName = this.CreateCountryForm.value.CountryName;
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
      country.CountryName = this.CreateCountryForm.value.CountryName;
      country.CountryId = this.CreateCountryForm.value.CountryId;
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
